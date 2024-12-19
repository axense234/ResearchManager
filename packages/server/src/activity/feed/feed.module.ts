// NestJS
import { Module } from '@nestjs/common';
// Services
import { ActivityFeedService } from './feed.service';
// Controllers
import { ActivityFeedController } from './feed.controller';

@Module({
  providers: [ActivityFeedService],
  controllers: [ActivityFeedController],
})
export class ActivityFeedModule {}
