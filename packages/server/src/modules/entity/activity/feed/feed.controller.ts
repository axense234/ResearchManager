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
  Req,
} from '@nestjs/common';
// Custom Guard
import { JwtGuard } from 'src/modules/entity/auth/guard';
// Types
import GetActivityFeedsQueryParams from './types/GetActivityFeedsQueryParams';
// Dtos
import { CreateActivityFeedDto, UpdateActivityFeedDto } from './dto';
// Services
import { ActivityFeedService } from './services/feed.service';

@UseGuards(JwtGuard)
@Controller('activityFeeds')
export class ActivityFeedController {
  constructor(private activityFeedService: ActivityFeedService) {}

  @Get()
  getActivityFeeds(
    @Query() queryParams: GetActivityFeedsQueryParams,
    @Req() req: Request,
  ) {
    return this.activityFeedService.getActivityFeeds(queryParams, req.url);
  }

  @Get(':activityFeedId')
  getActivityFeed(
    @Param('activityFeedId') activityFeedId: string,
    @Req() req: Request,
  ) {
    return this.activityFeedService.getActivityFeed(activityFeedId, req.url);
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
