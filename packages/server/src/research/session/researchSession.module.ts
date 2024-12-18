// NestJS
import { Module } from '@nestjs/common';
// Services
import { ResearchSessionService } from './researchSession.service';
// Controllers
import { ResearchSessionController } from './researchSession.controller';

@Module({
  providers: [ResearchSessionService],
  controllers: [ResearchSessionController],
})
export class ResearchSessionModule {}
