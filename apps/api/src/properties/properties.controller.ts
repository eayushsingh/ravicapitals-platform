import { Controller, Get, Post, Body } from '@nestjs/common';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Get()
  async getProperties() {
    return this.propertiesService.getAllProperties();
  }

  @Post()
  async createProperty(@Body() body: any) {
    return this.propertiesService.createProperty(body);
  }
}
