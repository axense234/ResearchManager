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
// Dtos
import { CreateActivityFeedDto, UpdateActivityFeedDto } from './dto';
// Services
import { ActivityFeedService } from './services/feed.service';
// Types
import {
  CreateActivityFeedQueryParams,
  DeleteActivityFeedQueryParams,
  GetActivityFeedQueryParams,
  GetActivityFeedsQueryParams,
  UpdateActivityFeedQueryParams,
} from './types';

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
    @Query() queryParams: GetActivityFeedQueryParams,
    @Param('activityFeedId') activityFeedId: string,
    @Req() req: Request,
  ) {
    return this.activityFeedService.getActivityFeed(
      queryParams,
      activityFeedId,
      req.url,
    );
  }

  @Post('create')
  createActivityFeed(
    @Query() queryParams: CreateActivityFeedQueryParams,
    @Body() dto: CreateActivityFeedDto,
  ) {
    return this.activityFeedService.createActivityFeed(queryParams, dto);
  }

  @Patch(':activityFeedId/update')
  updateActivityFeed(
    @Query() queryParams: UpdateActivityFeedQueryParams,
    @Param('activityFeedId') activityFeedId: string,
    @Body() dto: UpdateActivityFeedDto,
  ) {
    return this.activityFeedService.updateActivityFeed(
      queryParams,
      dto,
      activityFeedId,
    );
  }

  @Delete(':activityFeedId/delete')
  deleteActivityFeed(
    @Query() queryParams: DeleteActivityFeedQueryParams,
    @Param('activityFeedId') activityFeedId: string,
  ) {
    return this.activityFeedService.deleteActivityFeed(
      queryParams,
      activityFeedId,
    );
  }
}
