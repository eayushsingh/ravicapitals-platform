import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from './prisma.service';
import { PropertiesController } from './properties/properties.controller';
import { PropertiesService } from './properties/properties.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { InvestmentsController } from './investments/investments.controller';
import { InvestmentsService } from './investments/investments.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'ravi_capitals_dev_jwt_secret_key_32_chars',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [PropertiesController, AuthController, InvestmentsController],
  providers: [PrismaService, PropertiesService, AuthService, InvestmentsService],
})
export class AppModule {}
