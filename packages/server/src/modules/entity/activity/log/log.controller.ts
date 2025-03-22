// NestJS
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Req,
  Query,
} from '@nestjs/common';
// Services
import { ActivityLogService } from './services/log.service';
// Dtos
import {
  CreateActivityLogDto,
  UpdateActivityLogDto,
} from '@researchmanager/shared/types';
// Types
import {
  CreateActivityLogQueryParams,
  DeleteActivityLogQueryParams,
  GetActivityLogQueryParams,
  GetActivityLogsQueryParams,
  UpdateActivityLogQueryParams,
} from './types';
// Swagger
import { ApiTags } from '@nestjs/swagger';
// Custom Decorators
import { JwtAuth } from 'src/decorators/auth/jwtAuth.decorator';
import { SwaggerAuth } from 'src/decorators/swagger/swaggerAuth.decorator';
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';
import { SwaggerBody } from 'src/decorators/swagger/swaggerBody.decorator';
import { SwaggerPathParams } from 'src/decorators/swagger/swaggerPathParams.decorator';

@JwtAuth()
@SwaggerAuth()
@ApiTags('Activity Logs')
@Controller('activityLogs')
export class ActivityLogController {
  constructor(private activityLogService: ActivityLogService) {}

  @SwaggerHead('activityLog', 'GET MULTIPLE')
  @SwaggerResponses('activityLog', 'GET MULTIPLE')
  @Get()
  getActivityLogs(
    @Query() queryParams: GetActivityLogsQueryParams,
    @Req() req: Request,
  ) {
    return this.activityLogService.getActivityLogs(queryParams, req.url);
  }

  @SwaggerHead('activityLog', 'GET SINGLE')
  @SwaggerResponses('activityLog', 'GET SINGLE')
  @SwaggerPathParams('activityLog', 'GET SINGLE')
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

  @SwaggerHead('activityLog', 'CREATE')
  @SwaggerBody('activityLog', 'CREATE')
  @SwaggerResponses('activityLog', 'CREATE')
  @Post('create')
  createActivityLog(
    @Query() queryParams: CreateActivityLogQueryParams,
    @Body() dto: CreateActivityLogDto,
  ) {
    return this.activityLogService.createActivityLog(queryParams, dto);
  }

  @SwaggerHead('activityLog', 'UPDATE')
  @SwaggerBody('activityLog', 'UPDATE')
  @SwaggerResponses('activityLog', 'UPDATE')
  @SwaggerPathParams('activityLog', 'UPDATE')
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

  @SwaggerHead('activityLog', 'DELETE')
  @SwaggerResponses('activityLog', 'DELETE')
  @SwaggerPathParams('activityLog', 'DELETE')
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
