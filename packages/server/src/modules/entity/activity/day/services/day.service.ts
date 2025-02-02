// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { CreateActivityDayService } from './createActivityDay.service';
import { DeleteActivityDayService } from './deleteActivityDay.service';
import { GetActivityDayService } from './getActivityDay.service';
import { GetActivityDaysService } from './getActivityDays.service';
import { UpdateActivityDayService } from './updateActivityDay.service';
// Dtos
import { CreateActivityDayDto, UpdateActivityDayDto } from '../dto';
// Types
import {
  CreateActivityDayQueryParams,
  DeleteActivityDayQueryParams,
  GetActivityDayQueryParams,
  GetActivityDaysQueryParams,
  UpdateActivityDayQueryParams,
} from '../types';

@Injectable()
export class ActivityDayService {
  constructor(
    private getActivityDaysService: GetActivityDaysService,
    private getActivityDayService: GetActivityDayService,
    private createActivityDayService: CreateActivityDayService,
    private updateActivityDayService: UpdateActivityDayService,
    private deleteActivityDayService: DeleteActivityDayService,
  ) {}

  async getActivityDays(queryParams: GetActivityDaysQueryParams, url: string) {
    return await this.getActivityDaysService.getActivityDays(queryParams, url);
  }

  async getActivityDay(
    queryParams: GetActivityDayQueryParams,
    activityDayId: string,
    url: string,
  ) {
    return await this.getActivityDayService.getActivityDay(
      queryParams,
      activityDayId,
      url,
    );
  }

  async createActivityDay(
    queryParams: CreateActivityDayQueryParams,
    dto: CreateActivityDayDto,
  ) {
    return await this.createActivityDayService.createActivityDay(
      queryParams,
      dto,
    );
  }

  async updateActivityDay(
    queryParams: UpdateActivityDayQueryParams,
    dto: UpdateActivityDayDto,
    activityDayId: string,
  ) {
    return await this.updateActivityDayService.updateActivityDay(
      queryParams,
      dto,
      activityDayId,
    );
  }

  async deleteActivityDay(
    queryParams: DeleteActivityDayQueryParams,
    activityDayId: string,
  ) {
    return await this.deleteActivityDayService.deleteActivityDay(
      queryParams,
      activityDayId,
    );
  }
}
