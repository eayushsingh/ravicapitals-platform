import { Controller, Post, Body, Headers, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('register')
  register(@Body() body: { email: string; password: string; fullName: string }) {
    return this.authService.register(body.email, body.password, body.fullName);
  }

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @Post('wallet-login')
  walletLogin(@Body() body: { walletAddress: string; signature: string; message: string }) {
    return this.authService.loginWithWallet(body.walletAddress, body.signature, body.message);
  }

  @Post('kyc/submit')
  async submitKyc(
    @Headers('authorization') authHeader: string,
    @Body() body: { docType: string; docNumber: string },
  ) {
    if (!authHeader) throw new UnauthorizedException('Token missing');
    const token = authHeader.replace('Bearer ', '');
    const decoded = this.jwtService.verify(token, { secret: process.env.JWT_SECRET || 'ravi_capitals_dev_jwt_secret_key_32_chars' });
    return this.authService.submitKyc(decoded.sub, body.docType, body.docNumber);
  }
}
