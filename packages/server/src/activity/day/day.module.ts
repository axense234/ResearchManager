// NestJS
import { Module } from '@nestjs/common';
// Services
import { ActivityDayService } from './day.service';
// Controllers
import { ActivityDayController } from './day.controller';

@Module({
  providers: [ActivityDayService],
  controllers: [ActivityDayController],
})
export class ActivityDayModule {}
