// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetActivityFeedsService } from './getActivityFeeds.service';
import { GetActivityFeedService } from './getActivityFeed.service';
import { CreateActivityFeedService } from './createActivityFeed.service';
import { UpdateActivityFeedService } from './updateActivityFeed.service';
import { DeleteActivityFeedService } from './deleteActivityFeed.service';
// Types
import GetActivityFeedsQueryParams from '../types/GetActivityFeedsQueryParams';
// Dtos
import { CreateActivityFeedDto, UpdateActivityFeedDto } from '../dto';

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

  async getActivityFeed(activityFeedId: string, url: string) {
    return await this.getActivityFeedService.getActivityFeed(
      activityFeedId,
      url,
    );
  }

  async createActivityFeed(dto: CreateActivityFeedDto) {
    return await this.createActivityFeedService.createActivityFeed(dto);
  }

  async updateActivityFeed(dto: UpdateActivityFeedDto, activityFeedId: string) {
    return await this.updateActivityFeedService.updateActivityFeed(
      dto,
      activityFeedId,
    );
  }

  async deleteActivityFeed(activityFeedId: string) {
    return await this.deleteActivityFeedService.deleteActivityFeed(
      activityFeedId,
    );
  }
}
