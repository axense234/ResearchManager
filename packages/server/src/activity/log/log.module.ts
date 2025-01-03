// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { ActivityLogController } from './log.controller';
// Services
import { ActivityLogService } from './services/log.service';
import { GetActivityLogsService } from './services/getActivityLogs.service';
import { GetActivityLogService } from './services/getActivityLog.service';
import { CreateActivityLogService } from './services/createActivityLog.service';
import { UpdateActivityLogService } from './services/updateActivityLog.service';
import { DeleteActivityLogService } from './services/deleteActivityLog.service';

@Module({
  providers: [
    ActivityLogService,
    GetActivityLogsService,
    GetActivityLogService,
    CreateActivityLogService,
    UpdateActivityLogService,
    DeleteActivityLogService,
  ],
  controllers: [ActivityLogController],
})
export class ActivityLogModule {}
