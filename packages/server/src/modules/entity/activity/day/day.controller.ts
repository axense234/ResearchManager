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
import { CreateActivityDayDto, UpdateActivityDayDto } from './dto/day.dto';
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
// Custom Decorators
import { JwtAuth } from 'src/decorators/auth/jwtAuth.decorator';

@JwtAuth()
@Controller('activityDays')
export class ActivityDayController {
  constructor(private activityDayService: ActivityDayService) {}

  @Get()
  getActivityDays(
    @Query() queryParams: GetActivityDaysQueryParams,
    @Req() req: Request,
  ) {
    return this.activityDayService.getActivityDays(queryParams, req.url);
  }

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

  @Post('create')
  createActivityDay(
    @Query() queryParams: CreateActivityDayQueryParams,
    @Body() dto: CreateActivityDayDto,
  ) {
    return this.activityDayService.createActivityDay(queryParams, dto);
  }

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
