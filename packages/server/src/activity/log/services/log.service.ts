// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetActivityLogsService } from './getActivityLogs.service';
import { GetActivityLogService } from './getActivityLog.service';
import { CreateActivityLogService } from './createActivityLog.service';
import { UpdateActivityLogService } from './updateActivityLog.service';
import { DeleteActivityLogService } from './deleteActivityLog.service';
// Dtos
import { CreateActivityLogDto, UpdateActivityLogDto } from '../dto';

@Injectable()
export class ActivityLogService {
  constructor(
    private getActivityLogsService: GetActivityLogsService,
    private getActivityLogService: GetActivityLogService,
    private createActivityLogService: CreateActivityLogService,
    private updateActivityLogService: UpdateActivityLogService,
    private deleteActivityLogService: DeleteActivityLogService,
  ) {}

  async getActivityLogs(url: string) {
    return await this.getActivityLogsService.getActivityLogs(url);
  }

  async getActivityLog(activityLogId: string, url: string) {
    return await this.getActivityLogService.getActivityLog(activityLogId, url);
  }

  async createActivityLog(dto: CreateActivityLogDto) {
    return await this.createActivityLogService.createActivityLog(dto);
  }

  async updateActivityLog(dto: UpdateActivityLogDto, activityLogId: string) {
    return await this.updateActivityLogService.updateActivityLog(
      dto,
      activityLogId,
    );
  }

  async deleteActivityLog(activityLogId: string) {
    return await this.deleteActivityLogService.deleteActivityLog(activityLogId);
  }
}
