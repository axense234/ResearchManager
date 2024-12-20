// NestJS
import { Module } from '@nestjs/common';
// Services
import { ResearchSessionService } from './session.service';
// Controllers
import { ResearchSessionController } from './session.controller';

@Module({
  providers: [ResearchSessionService],
  controllers: [ResearchSessionController],
})
export class ResearchSessionModule {}
