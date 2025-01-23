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

@Injectable()
export class ActivityDayService {
  constructor(
    private getActivityDaysService: GetActivityDaysService,
    private getActivityDayService: GetActivityDayService,
    private createActivityDayService: CreateActivityDayService,
    private updateActivityDayService: UpdateActivityDayService,
    private deleteActivityDayService: DeleteActivityDayService,
  ) {}

  async getActivityDays(activityFeedId: string, url: string) {
    return await this.getActivityDaysService.getActivityDays(
      activityFeedId,
      url,
    );
  }

  async getActivityDay(activityDayId: string, url: string) {
    return await this.getActivityDayService.getActivityDay(activityDayId, url);
  }

  async createActivityDay(dto: CreateActivityDayDto) {
    return await this.createActivityDayService.createActivityDay(dto);
  }

  async updateActivityDay(dto: UpdateActivityDayDto, activityDayId: string) {
    return await this.updateActivityDayService.updateActivityDay(
      dto,
      activityDayId,
    );
  }

  async deleteActivityDay(activityDayId: string) {
    return await this.deleteActivityDayService.deleteActivityDay(activityDayId);
  }
}
