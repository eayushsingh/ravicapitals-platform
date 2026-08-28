import { Injectable, BadRequestException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class InvestmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async invest(userId: string, propertyId: string, tokenCount: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new BadRequestException('User not found');
    if (user.kycStatus !== 'VERIFIED') {
      throw new ForbiddenException('SEBI/SPV Compliance: KYC verification required prior to fractional investment');
    }

    const property = await this.prisma.property.findUnique({ where: { id: propertyId } });
    if (!property) throw new BadRequestException('Property not found');
    if (property.availableTokens < tokenCount) {
      throw new BadRequestException(`Only ${property.availableTokens} tokens available for this property`);
    }

    const amountPaid = Number(property.tokenPrice) * tokenCount;

    // Execute atomic transaction (ACID compliant)
    return this.prisma.$transaction(async (tx) => {
      // 1. Decrement available tokens
      const updatedProperty = await tx.property.update({
        where: { id: propertyId },
        data: {
          availableTokens: { decrement: tokenCount },
          status: property.availableTokens - tokenCount === 0 ? 'FULLY_FUNDED' : 'ACTIVE',
        },
      });

      // 2. Record the confirmed investment
      const investment = await tx.investment.create({
        data: {
          userId,
          propertyId,
          tokenCount,
          amountPaid,
          status: 'CONFIRMED',
        },
      });

      return {
        investmentId: investment.id,
        tokensAcquired: tokenCount,
        amountPaid,
        spv: updatedProperty.spvName,
        status: 'SUCCESS',
      };
    });
  }

  async getUserPortfolio(userId: string) {
    const investments = await this.prisma.investment.findMany({
      where: { userId, status: 'CONFIRMED' },
      include: { property: true },
      orderBy: { createdAt: 'desc' },
    });

    const totalInvested = investments.reduce((acc, inv) => acc + Number(inv.amountPaid), 0);
    const totalTokens = investments.reduce((acc, inv) => acc + inv.tokenCount, 0);

    return {
      totalInvested,
      totalTokens,
      holdings: investments,
    };
  }
}
