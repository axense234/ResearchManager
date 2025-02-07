// NestJS
import { Module } from '@nestjs/common';
// Controller
import { HealthController } from './health.controller';
// Service
import { HealthService } from './health.service';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
