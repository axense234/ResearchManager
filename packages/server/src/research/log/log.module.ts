// NestJS
import { Module } from '@nestjs/common';
// Services
import { ResearchLogService } from './services/index.service';
// Controllers
import { ResearchLogController } from './log.controller';

@Module({
  providers: [ResearchLogService],
  controllers: [ResearchLogController],
})
export class ResearchLogModule {}
