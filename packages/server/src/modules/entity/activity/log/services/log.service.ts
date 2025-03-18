// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetActivityLogsService } from './getActivityLogs.service';
import { GetActivityLogService } from './getActivityLog.service';
import { CreateActivityLogService } from './createActivityLog.service';
import { UpdateActivityLogService } from './updateActivityLog.service';
import { DeleteActivityLogService } from './deleteActivityLog.service';
// Dtos
import type {
  CreateActivityLogDto,
  UpdateActivityLogDto,
} from '@researchmanager/shared/types';
// Types
import {
  CreateActivityLogQueryParams,
  DeleteActivityLogQueryParams,
  GetActivityLogQueryParams,
  GetActivityLogsQueryParams,
  UpdateActivityLogQueryParams,
} from '../types';

@Injectable()
export class ActivityLogService {
  constructor(
    private getActivityLogsService: GetActivityLogsService,
    private getActivityLogService: GetActivityLogService,
    private createActivityLogService: CreateActivityLogService,
    private updateActivityLogService: UpdateActivityLogService,
    private deleteActivityLogService: DeleteActivityLogService,
  ) {}

  async getActivityLogs(queryParams: GetActivityLogsQueryParams, url: string) {
    return await this.getActivityLogsService.getActivityLogs(queryParams, url);
  }

  async getActivityLog(
    queryParams: GetActivityLogQueryParams,
    activityLogId: string,
    url: string,
  ) {
    return await this.getActivityLogService.getActivityLog(
      queryParams,
      activityLogId,
      url,
    );
  }

  async createActivityLog(
    queryParams: CreateActivityLogQueryParams,
    dto: CreateActivityLogDto,
  ) {
    return await this.createActivityLogService.createActivityLog(
      queryParams,
      dto,
    );
  }

  async updateActivityLog(
    queryParams: UpdateActivityLogQueryParams,
    dto: UpdateActivityLogDto,
    activityLogId: string,
  ) {
    return await this.updateActivityLogService.updateActivityLog(
      queryParams,
      dto,
      activityLogId,
    );
  }

  async deleteActivityLog(
    queryParams: DeleteActivityLogQueryParams,
    activityLogId: string,
  ) {
    return await this.deleteActivityLogService.deleteActivityLog(
      queryParams,
      activityLogId,
    );
  }
}
