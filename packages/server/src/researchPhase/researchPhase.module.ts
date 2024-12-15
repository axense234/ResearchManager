// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { ResearchPhaseController } from './researchPhase.controller';
// Services
import { ResearchPhaseService } from './researchPhase.service';

@Module({
  providers: [ResearchPhaseService],
  controllers: [ResearchPhaseController],
})
export class ResearchPhaseModule {}
