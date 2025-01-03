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
import { ActivityLogService } from './services/log.service';
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
    return this.activityLogService.getActivityLogs(req.url);
  }

  @Get(':activityLogId')
  getActivityLog(
    @Param('activityLogId') activityLogId: string,
    @Req() req: Request,
  ) {
    return this.activityLogService.getActivityLog(activityLogId, req.url);
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
