import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PropertiesController } from './properties/properties.controller';
import { PropertiesService } from './properties/properties.service';

@Module({
  imports: [],
  controllers: [PropertiesController],
  providers: [PrismaService, PropertiesService],
})
export class AppModule {}
