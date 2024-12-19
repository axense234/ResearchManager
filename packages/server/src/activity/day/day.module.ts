// NestJS
import { Module } from '@nestjs/common';
// Services
import { DayActivityService } from './day.service';
// Controllers
import { DayActivityController } from './day.controller';

@Module({
  providers: [DayActivityService],
  controllers: [DayActivityController],
})
export class DayActivityModule {}
