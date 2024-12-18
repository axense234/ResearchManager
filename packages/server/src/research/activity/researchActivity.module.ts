// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { ResearchActivityController } from './researchActivity.controller';
// Services
import { ResearchActivityService } from './researchActivity.service';

@Module({
  controllers: [ResearchActivityController],
  providers: [ResearchActivityService],
})
export class ResearchActivityModule {}
