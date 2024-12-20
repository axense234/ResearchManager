// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { ResearchActivityController } from './activity.controller';
// Services
import { ResearchActivityService } from './activity.service';

@Module({
  controllers: [ResearchActivityController],
  providers: [ResearchActivityService],
})
export class ResearchActivityModule {}
