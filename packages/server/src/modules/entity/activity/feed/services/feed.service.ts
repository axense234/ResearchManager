// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetActivityFeedsService } from './getActivityFeeds.service';
import { GetActivityFeedService } from './getActivityFeed.service';
import { CreateActivityFeedService } from './createActivityFeed.service';
import { UpdateActivityFeedService } from './updateActivityFeed.service';
import { DeleteActivityFeedService } from './deleteActivityFeed.service';
// Dtos
import {
  CreateActivityFeedDto,
  GetActivityFeedsQueryParams,
  UpdateActivityFeedDto,
} from '@researchmanager/shared/types';
// Types
import {
  CreateActivityFeedQueryParams,
  DeleteActivityFeedQueryParams,
  GetActivityFeedQueryParams,
  UpdateActivityFeedQueryParams,
} from '../types';

@Injectable()
export class ActivityFeedService {
  constructor(
    private getActivityFeedsService: GetActivityFeedsService,
    private getActivityFeedService: GetActivityFeedService,
    private createActivityFeedService: CreateActivityFeedService,
    private updateActivityFeedService: UpdateActivityFeedService,
    private deleteActivityFeedService: DeleteActivityFeedService,
  ) {}

  async getActivityFeeds(
    queryParams: GetActivityFeedsQueryParams,
    url: string,
  ) {
    return await this.getActivityFeedsService.getActivityFeeds(
      queryParams,
      url,
    );
  }

  async getActivityFeed(
    queryParams: GetActivityFeedQueryParams,
    activityFeedId: string,
    url: string,
  ) {
    return await this.getActivityFeedService.getActivityFeed(
      queryParams,
      activityFeedId,
      url,
    );
  }

  async createActivityFeed(
    queryParams: CreateActivityFeedQueryParams,
    dto: CreateActivityFeedDto,
  ) {
    return await this.createActivityFeedService.createActivityFeed(
      queryParams,
      dto,
    );
  }

  async updateActivityFeed(
    queryParams: UpdateActivityFeedQueryParams,
    dto: UpdateActivityFeedDto,
    activityFeedId: string,
  ) {
    return await this.updateActivityFeedService.updateActivityFeed(
      queryParams,
      dto,
      activityFeedId,
    );
  }

  async deleteActivityFeed(
    queryParams: DeleteActivityFeedQueryParams,
    activityFeedId: string,
  ) {
    return await this.deleteActivityFeedService.deleteActivityFeed(
      queryParams,
      activityFeedId,
    );
  }
}
