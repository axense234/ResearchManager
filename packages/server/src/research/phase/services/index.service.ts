// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetResearchPhasesService } from './getResearchPhases.service';
import { GetResearchPhaseService } from './getResearchPhase.service';
import { CreateResearchPhaseService } from './createResearchPhase.service';
import { UpdateResearchPhaseService } from './updateResearchPhase.service';
import { DeleteResearchPhaseService } from './deleteResearchPhase.service';

@Injectable()
export class ResearchPhaseService {
  constructor(
    public GetResearchPhasesService: GetResearchPhasesService,
    public GetResearchPhaseService: GetResearchPhaseService,
    public CreateResearchPhaseService: CreateResearchPhaseService,
    public UpdateResearchPhaseService: UpdateResearchPhaseService,
    public DeleteResearchPhaseService: DeleteResearchPhaseService,
  ) {}
}
