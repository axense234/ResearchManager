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
  Query,
} from '@nestjs/common';
// Services
import { ActivityLogService } from './services/log.service';
// Custom Guard
import { JwtGuard } from 'src/modules/entity/auth/guard';
// Dtos
import { CreateActivityLogDto, UpdateActivityLogDto } from './dto';
// Types
import {
  CreateActivityLogQueryParams,
  DeleteActivityLogQueryParams,
  GetActivityLogQueryParams,
  GetActivityLogsQueryParams,
  UpdateActivityLogQueryParams,
} from './types';

@UseGuards(JwtGuard)
@Controller('activityLogs')
export class ActivityLogController {
  constructor(private activityLogService: ActivityLogService) {}

  @Get()
  getActivityLogs(
    @Query() queryParams: GetActivityLogsQueryParams,
    @Req() req: Request,
  ) {
    return this.activityLogService.getActivityLogs(queryParams, req.url);
  }

  @Get(':activityLogId')
  getActivityLog(
    @Query() queryParams: GetActivityLogQueryParams,
    @Param('activityLogId') activityLogId: string,
    @Req() req: Request,
  ) {
    return this.activityLogService.getActivityLog(
      queryParams,
      activityLogId,
      req.url,
    );
  }

  @Post('create')
  createActivityLog(
    @Query() queryParams: CreateActivityLogQueryParams,
    @Body() dto: CreateActivityLogDto,
  ) {
    return this.activityLogService.createActivityLog(queryParams, dto);
  }

  @Patch(':activityLogId/update')
  updateActivityLog(
    @Query() queryParams: UpdateActivityLogQueryParams,
    @Param('activityLogId') activityLogId: string,
    @Body() dto: UpdateActivityLogDto,
  ) {
    return this.activityLogService.updateActivityLog(
      queryParams,
      dto,
      activityLogId,
    );
  }

  @Delete(':activityLogId/delete')
  deleteActivityLog(
    @Query() queryParams: DeleteActivityLogQueryParams,
    @Param('activityLogId') activityLogId: string,
  ) {
    return this.activityLogService.deleteActivityLog(
      queryParams,
      activityLogId,
    );
  }
}
