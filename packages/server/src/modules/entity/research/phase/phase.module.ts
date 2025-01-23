// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { ResearchPhaseController } from './phase.controller';
// Services
import { ResearchPhaseService } from './services/phase.service';
import { GetResearchPhasesService } from './services/getResearchPhases.service';
import { GetResearchPhaseService } from './services/getResearchPhase.service';
import { CreateResearchPhaseService } from './services/createResearchPhase.service';
import { UpdateResearchPhaseService } from './services/updateResearchPhase.service';
import { DeleteResearchPhaseService } from './services/deleteResearchPhase.service';

@Module({
  providers: [
    ResearchPhaseService,
    GetResearchPhasesService,
    GetResearchPhaseService,
    CreateResearchPhaseService,
    UpdateResearchPhaseService,
    DeleteResearchPhaseService,
  ],
  controllers: [ResearchPhaseController],
})
export class ResearchPhaseModule {}
