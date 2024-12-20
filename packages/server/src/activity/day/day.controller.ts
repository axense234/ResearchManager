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
  UseGuards,
} from '@nestjs/common';
// Services
import { ActivityDayService } from './day.service';
// Dtos
import { CreateActivityDayDto, UpdateActivityDayDto } from './dto/day.dto';
// Custom Guard
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('activityDays')
export class ActivityDayController {
  constructor(private activityDayService: ActivityDayService) {}

  @Get()
  getDayActivities(@Query('activityFeedId') activityFeedId: string) {
    return this.activityDayService.getActivityDays(activityFeedId);
  }

  @Get(':activityDayId')
  getDayActivity(@Param('activityDayId') activityDayId: string) {
    return this.activityDayService.getActivityDay(activityDayId);
  }

  @Post('create')
  createDayActivity(@Body() dto: CreateActivityDayDto) {
    return this.activityDayService.createActivityDay(dto);
  }

  @Patch(':activityDayId/update')
  updateDayActivity(
    @Param('activityDayId') activityDayId: string,
    @Body() dto: UpdateActivityDayDto,
  ) {
    return this.activityDayService.updateActivityDay(dto, activityDayId);
  }

  @Delete(':activityDayId/delete')
  deleteDayActivity(@Param('activityDayId') activityDayId: string) {
    return this.activityDayService.deleteActivityDay(activityDayId);
  }
}
