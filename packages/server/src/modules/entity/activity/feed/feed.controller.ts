// NestJS
import {
  Body,
  Controller,
  Get,
  Param,
  Query,
  Post,
  Delete,
  Patch,
  Req,
} from '@nestjs/common';
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
// Swagger
import { ApiTags } from '@nestjs/swagger';
// Custom Decorators
import { JwtAuth } from 'src/decorators/auth/jwtAuth.decorator';
import { SwaggerAuth } from 'src/decorators/swagger/swaggerAuth.decorator';
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';
import { SwaggerBody } from 'src/decorators/swagger/swaggerBody.decorator';
import { SwaggerPathParams } from 'src/decorators/swagger/swaggerPathParams.decorator';

@JwtAuth()
@SwaggerAuth()
@ApiTags('Activity Feeds')
@Controller('activityFeeds')
export class ActivityFeedController {
  constructor(private activityFeedService: ActivityFeedService) {}

  @SwaggerHead('activityFeed', 'GET MULTIPLE')
  @SwaggerResponses('activityFeed', 'GET MULTIPLE')
  @Get()
  getActivityFeeds(
    @Query() queryParams: GetActivityFeedsQueryParams,
    @Req() req: Request,
  ) {
    return this.activityFeedService.getActivityFeeds(queryParams, req.url);
  }

  @SwaggerHead('activityFeed', 'GET SINGLE')
  @SwaggerResponses('activityFeed', 'GET SINGLE')
  @SwaggerPathParams('activityFeed', 'GET SINGLE')
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

  @SwaggerHead('activityFeed', 'CREATE')
  @SwaggerBody('activityFeed', 'CREATE')
  @SwaggerResponses('activityFeed', 'CREATE')
  @Post('create')
  createActivityFeed(
    @Query() queryParams: CreateActivityFeedQueryParams,
    @Body() dto: CreateActivityFeedDto,
  ) {
    return this.activityFeedService.createActivityFeed(queryParams, dto);
  }

  @SwaggerHead('activityFeed', 'UPDATE')
  @SwaggerBody('activityFeed', 'UPDATE')
  @SwaggerResponses('activityFeed', 'UPDATE')
  @SwaggerPathParams('activityFeed', 'UPDATE')
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

  @SwaggerHead('activityFeed', 'DELETE')
  @SwaggerResponses('activityFeed', 'DELETE')
  @SwaggerPathParams('activityFeed', 'DELETE')
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
