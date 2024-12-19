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
import { DayActivityService } from './day.service';
// Dtos
import { CreateDayActivityDto, UpdateDayActivityDto } from './dto/day.dto';
// Custom Guard
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('dayActivities')
export class DayActivityController {
  constructor(private dayActivityService: DayActivityService) {}

  @Get()
  getDayActivities(@Query('activityFeedId') activityFeedId: string) {
    return this.dayActivityService.getDayActivities(activityFeedId);
  }

  @Get(':dayActivityId')
  getDayActivity(@Param('dayActivityId') dayActivityId: string) {
    return this.dayActivityService.getDayActivity(dayActivityId);
  }

  @Post('create')
  createDayActivity(@Body() dto: CreateDayActivityDto) {
    return this.dayActivityService.createDayActivity(dto);
  }

  @Patch(':dayActivityId/update')
  updateDayActivity(
    @Param('dayActivityId') dayActivityId: string,
    @Body() dto: UpdateDayActivityDto,
  ) {
    return this.dayActivityService.updateDayActivity(dto, dayActivityId);
  }

  @Delete(':dayActivityId/delete')
  deleteDayActivity(@Param('dayActivityId') dayActivityId: string) {
    return this.dayActivityService.deleteDayActivity(dayActivityId);
  }
}
