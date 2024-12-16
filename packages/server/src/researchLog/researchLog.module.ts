// NestJS
import { Module } from '@nestjs/common';
// Services
import { ResearchLogService } from './researchLog.service';
// Controllers
import { ResearchLogController } from './researchLog.controller';

@Module({
  providers: [ResearchLogService],
  controllers: [ResearchLogController],
})
export class ResearchLogModule {}
