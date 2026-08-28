import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcryptjs';
import { verifyMessage } from 'viem';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(email: string, password: string, fullName: string) {
    const existing = await this.prisma.client.user.findUnique({ where: { email } });
    if (existing) throw new BadRequestException('User already exists');

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await this.prisma.client.user.create({
      data: { email, passwordHash, fullName },
    });

    return this.generateToken(user.id, user.email, user.kycStatus);
  }

  async login(email: string, password: string) {
    const user = await this.prisma.client.user.findUnique({ where: { email } });
    if (!user || !user.passwordHash) throw new UnauthorizedException('Invalid credentials');

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    return this.generateToken(user.id, user.email, user.kycStatus);
  }

  // Web3 Sign-In (SIWE style)
  async loginWithWallet(walletAddress: string, signature: string, message: string) {
    const isValid = await verifyMessage({
      address: walletAddress as `0x${string}`,
      message,
      signature: signature as `0x${string}`,
    });

    if (!isValid) throw new UnauthorizedException('Invalid cryptographic signature');

    let user = await this.prisma.client.user.findUnique({ where: { walletAddress } });
    if (!user) {
      user = await this.prisma.client.user.create({
        data: {
          email: `${walletAddress.toLowerCase()}@wallet.ravicapitals.com`,
          walletAddress,
        },
      });
    }

    return this.generateToken(user.id, user.email, user.kycStatus);
  }

  async submitKyc(userId: string, docType: string, docNumber: string) {
    const user = await this.prisma.client.user.update({
      where: { id: userId },
      data: {
        kycStatus: 'VERIFIED', // Sandbox auto-approval for MVP
        kycDocType: docType,
        kycDocNumber: docNumber,
      },
    });

    return { message: 'KYC Verified successfully', status: user.kycStatus };
  }

  private generateToken(userId: string, email: string, kycStatus: string) {
    const payload = { sub: userId, email, kycStatus };
    return {
      accessToken: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET || 'ravi_capitals_dev_jwt_secret_key_32_chars' }),
      user: { id: userId, email, kycStatus },
    };
  }
}
