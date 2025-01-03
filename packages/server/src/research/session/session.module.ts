// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { ResearchSessionController } from './session.controller';
// Services
import { ResearchSessionService } from './services/session.service';
import { GetResearchSessionsService } from './services/getResearchSessions.service';
import { GetResearchSessionService } from './services/getResearchSession.service';
import { CreateResearchSessionService } from './services/createResearchSession.service';
import { UpdateResearchSessionService } from './services/updateResearchSession.service';
import { DeleteResearchSessionService } from './services/deleteResearchSession.service';

@Module({
  providers: [
    ResearchSessionService,
    GetResearchSessionsService,
    GetResearchSessionService,
    CreateResearchSessionService,
    UpdateResearchSessionService,
    DeleteResearchSessionService,
  ],
  controllers: [ResearchSessionController],
})
export class ResearchSessionModule {}
