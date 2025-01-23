// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { ActivityFeedController } from './feed.controller';
// Services
import { ActivityFeedService } from './services/feed.service';
import { GetActivityFeedsService } from './services/getActivityFeeds.service';
import { GetActivityFeedService } from './services/getActivityFeed.service';
import { CreateActivityFeedService } from './services/createActivityFeed.service';
import { UpdateActivityFeedService } from './services/updateActivityFeed.service';
import { DeleteActivityFeedService } from './services/deleteActivityFeed.service';

@Module({
  providers: [
    ActivityFeedService,
    GetActivityFeedsService,
    GetActivityFeedService,
    CreateActivityFeedService,
    UpdateActivityFeedService,
    DeleteActivityFeedService,
  ],
  controllers: [ActivityFeedController],
})
export class ActivityFeedModule {}
