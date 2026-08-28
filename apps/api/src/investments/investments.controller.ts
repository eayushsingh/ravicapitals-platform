import { Controller, Post, Get, Body, Headers, UnauthorizedException } from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { JwtService } from '@nestjs/jwt';

@Controller('investments')
export class InvestmentsController {
  constructor(
    private readonly investmentsService: InvestmentsService,
    private readonly jwtService: JwtService,
  ) {}

  private extractUserId(authHeader: string): string {
    if (!authHeader) throw new UnauthorizedException('Authorization header required');
    const token = authHeader.replace('Bearer ', '');
    const decoded = this.jwtService.verify(token, { secret: process.env.JWT_SECRET || 'ravi_capitals_dev_jwt_secret_key_32_chars' });
    return decoded.sub;
  }

  @Post()
  async invest(
    @Headers('authorization') authHeader: string,
    @Body() body: { propertyId: string; tokenCount: number },
  ) {
    const userId = this.extractUserId(authHeader);
    return this.investmentsService.invest(userId, body.propertyId, body.tokenCount);
  }

  @Get('portfolio')
  async getPortfolio(@Headers('authorization') authHeader: string) {
    const userId = this.extractUserId(authHeader);
    return this.investmentsService.getUserPortfolio(userId);
  }
}
