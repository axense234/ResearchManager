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
  Req,
} from '@nestjs/common';
// Services
import { ActivityLogService } from './services/index.service';
// Custom Guard
import { JwtGuard } from 'src/auth/guard';
// Dtos
import { CreateActivityLogDto, UpdateActivityLogDto } from './dto';

@UseGuards(JwtGuard)
@Controller('activityLogs')
export class ActivityLogController {
  constructor(private activityLogService: ActivityLogService) {}

  @Get()
  getActivityLogs(@Req() req: Request) {
    return this.activityLogService.GetActivityLogsService.getActivityLogs(
      req.url,
    );
  }

  @Get(':activityLogId')
  getActivityLog(
    @Param('activityLogId') activityLogId: string,
    @Req() req: Request,
  ) {
    return this.activityLogService.GetActivityLogService.getActivityLog(
      activityLogId,
      req.url,
    );
  }

  @Post('create')
  createActivityLog(@Body() dto: CreateActivityLogDto) {
    return this.activityLogService.CreateActivityLogService.createActivityLog(
      dto,
    );
  }

  @Patch(':activityLogId/update')
  updateActivityLog(
    @Param('activityLogId') activityLogId: string,
    @Body() dto: UpdateActivityLogDto,
  ) {
    return this.activityLogService.UpdateActivityLogService.updateActivityLog(
      dto,
      activityLogId,
    );
  }

  @Delete(':activityLogId/delete')
  deleteActivityLog(@Param('activityLogId') activityLogId: string) {
    return this.activityLogService.DeleteActivityLogService.deleteActivityLog(
      activityLogId,
    );
  }
}
