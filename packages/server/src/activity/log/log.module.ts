// NestJS
import { Module } from '@nestjs/common';
// Services
import { ActivityLogService } from './log.service';
// Controller
import { ActivityLogController } from './log.controller';

@Module({
  providers: [ActivityLogService],
  controllers: [ActivityLogController],
})
export class ActivityLogModule {}
