// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { ResearchLogController } from './log.controller';
// Services
import { ResearchLogService } from './services/log.service';
import { GetResearchLogsService } from './services/getResearchLogs.service';
import { GetResearchLogService } from './services/getResearchLog.service';
import { CreateResearchLogService } from './services/createResearchLog.service';
import { UpdateResearchLogService } from './services/updateResearchLog.service';
import { DeleteResearchLogService } from './services/deleteResearchLog.service';

@Module({
  providers: [
    ResearchLogService,
    GetResearchLogsService,
    GetResearchLogService,
    CreateResearchLogService,
    UpdateResearchLogService,
    DeleteResearchLogService,
  ],
  controllers: [ResearchLogController],
})
export class ResearchLogModule {}
