// NestJS
import { Controller, Get } from '@nestjs/common';
// Services
import { HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  getHealth() {
    return this.healthService.getHealth();
  }
}
