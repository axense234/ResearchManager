// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetResearchSessionsService } from './getResearchSessions.service';
import { GetResearchSessionService } from './getResearchSession.service';
import { CreateResearchSessionService } from './createResearchSession.service';
import { UpdateResearchSessionService } from './updateResearchSession.service';
import { DeleteResearchSessionService } from './deleteResearchSession.service';
@Injectable()
export class ResearchSessionService {
  constructor(
    public GetResearchSessionsService: GetResearchSessionsService,
    public GetResearchSessionService: GetResearchSessionService,
    public CreateResearchSessionService: CreateResearchSessionService,
    public UpdateResearchSessionService: UpdateResearchSessionService,
    public DeleteResearchSessionService: DeleteResearchSessionService,
  ) {}
}
