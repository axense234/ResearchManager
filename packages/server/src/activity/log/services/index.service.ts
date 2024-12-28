// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetActivityLogsService } from './getActivityLogs.service';
import { GetActivityLogService } from './getActivityLog.service';
import { CreateActivityLogService } from './createActivityLog.service';
import { UpdateActivityLogService } from './updateActivityLog.service';
import { DeleteActivityLogService } from './deleteActivityLog.service';

@Injectable()
export class ActivityLogService {
  constructor(
    public GetActivityLogsService: GetActivityLogsService,
    public GetActivityLogService: GetActivityLogService,
    public CreateActivityLogService: CreateActivityLogService,
    public UpdateActivityLogService: UpdateActivityLogService,
    public DeleteActivityLogService: DeleteActivityLogService,
  ) {}
}
