// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetActivityFeedsService } from './getActivityFeeds.service';
import { GetActivityFeedService } from './getActivityFeed.service';
import { CreateActivityFeedService } from './createActivityFeed.service';
import { UpdateActivityFeedService } from './updateActivityFeed.service';
import { DeleteActivityFeedService } from './deleteActivityFeed.service';

@Injectable()
export class ActivityFeedService {
  constructor(
    public GetActivityFeedsService: GetActivityFeedsService,
    public GetActivityFeedService: GetActivityFeedService,
    public CreateActivityFeedService: CreateActivityFeedService,
    public UpdateActivityFeedService: UpdateActivityFeedService,
    public DeleteActivityFeedService: DeleteActivityFeedService,
  ) {}
}
