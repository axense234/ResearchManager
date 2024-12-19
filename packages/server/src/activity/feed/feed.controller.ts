// NestJS
import {
  Body,
  Controller,
  Get,
  Param,
  Query,
  UseGuards,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
// Services
import { ActivityFeedService } from './feed.service';
// Custom Guard
import { JwtGuard } from 'src/auth/guard';
// Types
import GetActivityFeedsQueryParams from './types/GetActivityFeedsQueryParams';
// Dtos
import { CreateActivityFeedDto, UpdateActivityFeedDto } from './dto';

@UseGuards(JwtGuard)
@Controller('activityFeeds')
export class ActivityFeedController {
  constructor(private activityFeedService: ActivityFeedService) {}

  @Get()
  getActivityFeeds(@Query() queryParams: GetActivityFeedsQueryParams) {
    return this.activityFeedService.getActivityFeeds(queryParams);
  }

  @Get(':activityFeedId')
  getActivityFeed(@Param('activityFeedId') activityFeedId: string) {
    return this.activityFeedService.getActivityFeed(activityFeedId);
  }

  @Post('create')
  createActivityFeed(@Body() dto: CreateActivityFeedDto) {
    return this.activityFeedService.createActivityFeed(dto);
  }

  @Patch(':activityFeedId/update')
  updateActivityFeed(
    @Param('activityFeedId') activityFeedId: string,
    @Body() dto: UpdateActivityFeedDto,
  ) {
    return this.activityFeedService.updateActivityFeed(dto, activityFeedId);
  }

  @Delete(':activityFeedId/delete')
  deleteActivityFeed(@Param('activityFeedId') activityFeedId: string) {
    return this.activityFeedService.deleteActivityFeed(activityFeedId);
  }
}
