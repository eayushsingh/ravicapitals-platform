import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllProperties() {
    return this.prisma.property.findMany({
      where: { status: 'ACTIVE' },
      orderBy: { createdAt: 'desc' },
    });
  }

  async createProperty(data: {
    title: string;
    location: string;
    type: 'COMMERCIAL' | 'RESIDENTIAL' | 'PLOTS';
    targetValuation: number;
    tokenPrice: number;
    totalTokens: number;
    expectedYield: number;
    spvName: string;
  }) {
    return this.prisma.property.create({
      data: {
        ...data,
        availableTokens: data.totalTokens,
      },
    });
  }
}
