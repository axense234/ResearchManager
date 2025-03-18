// NestJS
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Delete,
  Patch,
  Req,
} from '@nestjs/common';
// Dtos
import type {
  CreateActivityDayDto,
  UpdateActivityDayDto,
} from '@researchmanager/shared/types';
// Services
import { ActivityDayService } from './services/day.service';
// Types
import {
  CreateActivityDayQueryParams,
  DeleteActivityDayQueryParams,
  GetActivityDayQueryParams,
  GetActivityDaysQueryParams,
  UpdateActivityDayQueryParams,
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
@ApiTags('Activity Days')
@Controller('activityDays')
export class ActivityDayController {
  constructor(private activityDayService: ActivityDayService) {}

  @SwaggerHead('activityDay', 'GET MULTIPLE')
  @SwaggerResponses('activityDay', 'GET MULTIPLE')
  @Get()
  getActivityDays(
    @Query() queryParams: GetActivityDaysQueryParams,
    @Req() req: Request,
  ) {
    return this.activityDayService.getActivityDays(queryParams, req.url);
  }

  @SwaggerHead('activityDay', 'GET SINGLE')
  @SwaggerResponses('activityDay', 'GET SINGLE')
  @SwaggerPathParams('activityDay', 'GET SINGLE')
  @Get(':activityDayId')
  getActivityDay(
    @Query() queryParams: GetActivityDayQueryParams,
    @Param('activityDayId') activityDayId: string,
    @Req() req: Request,
  ) {
    return this.activityDayService.getActivityDay(
      queryParams,
      activityDayId,
      req.url,
    );
  }

  @SwaggerHead('activityDay', 'CREATE')
  @SwaggerBody('activityDay', 'CREATE')
  @SwaggerResponses('activityDay', 'CREATE')
  @Post('create')
  createActivityDay(
    @Query() queryParams: CreateActivityDayQueryParams,
    @Body() dto: CreateActivityDayDto,
  ) {
    return this.activityDayService.createActivityDay(queryParams, dto);
  }

  @SwaggerHead('activityDay', 'UPDATE')
  @SwaggerBody('activityDay', 'UPDATE')
  @SwaggerResponses('activityDay', 'UPDATE')
  @SwaggerPathParams('activityDay', 'UPDATE')
  @Patch(':activityDayId/update')
  updateActivityDay(
    @Query() queryParams: UpdateActivityDayQueryParams,
    @Param('activityDayId') activityDayId: string,
    @Body() dto: UpdateActivityDayDto,
  ) {
    return this.activityDayService.updateActivityDay(
      queryParams,
      dto,
      activityDayId,
    );
  }

  @SwaggerHead('activityDay', 'DELETE')
  @SwaggerResponses('activityDay', 'DELETE')
  @SwaggerPathParams('activityDay', 'DELETE')
  @Delete(':activityDayId/delete')
  deleteActivityDay(
    @Query() queryParams: DeleteActivityDayQueryParams,
    @Param('activityDayId') activityDayId: string,
  ) {
    return this.activityDayService.deleteActivityDay(
      queryParams,
      activityDayId,
    );
  }
}
