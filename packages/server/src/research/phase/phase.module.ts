// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { ResearchPhaseController } from './phase.controller';
// Services
import { ResearchPhaseService } from './phase.service';

@Module({
  providers: [ResearchPhaseService],
  controllers: [ResearchPhaseController],
})
export class ResearchPhaseModule {}
