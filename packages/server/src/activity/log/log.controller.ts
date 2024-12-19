// NestJS
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Delete,
  Patch,
} from '@nestjs/common';
// Services
import { ActivityLogService } from './log.service';
// Custom Guard
import { JwtGuard } from 'src/auth/guard';
// Dtos
import { CreateActivityLogDto, UpdateActivityLogDto } from './dto';

@UseGuards(JwtGuard)
@Controller('activityLogs')
export class ActivityLogController {
  constructor(private activityLogService: ActivityLogService) {}

  @Get()
  getActivityLogs() {
    return this.activityLogService.getActivityLogs();
  }

  @Get(':activityLogId')
  getActivityLog(@Param('activityLogId') activityLogId: string) {
    return this.activityLogService.getActivityLog(activityLogId);
  }

  @Post('create')
  createActivityLog(@Body() dto: CreateActivityLogDto) {
    return this.activityLogService.createActivityLog(dto);
  }

  @Patch(':activityLogId/update')
  updateActivityLog(
    @Param('activityLogId') activityLogId: string,
    @Body() dto: UpdateActivityLogDto,
  ) {
    return this.activityLogService.updateActivityLog(dto, activityLogId);
  }

  @Delete(':activityLogId/delete')
  deleteActivityLog(@Param('activityLogId') activityLogId: string) {
    return this.activityLogService.deleteActivityLog(activityLogId);
  }
}
