// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { ActivityDayController } from './day.controller';
// Services
import { ActivityDayService } from './services/day.service';
import { GetActivityDaysService } from './services/getActivityDays.service';
import { GetActivityDayService } from './services/getActivityDay.service';
import { CreateActivityDayService } from './services/createActivityDay.service';
import { UpdateActivityDayService } from './services/updateActivityDay.service';
import { DeleteActivityDayService } from './services/deleteActivityDay.service';
@Module({
  providers: [
    ActivityDayService,
    GetActivityDaysService,
    GetActivityDayService,
    CreateActivityDayService,
    UpdateActivityDayService,
    DeleteActivityDayService,
  ],
  controllers: [ActivityDayController],
})
export class ActivityDayModule {}
