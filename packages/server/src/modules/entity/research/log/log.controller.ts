// NestJS
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
// Custom Guard
import { JwtGuard } from 'src/modules/entity/auth/guard';
// Services
import { ResearchLogService } from './services/log.service';
// Dtos
import { CreateResearchLogDto, UpdateResearchLogDto } from './dto';
// Types
import {
  CreateResearchLogQueryParams,
  DeleteResearchLogQueryParams,
  GetResearchLogQueryParams,
  GetResearchLogsQueryParams,
} from './types';

@UseGuards(JwtGuard)
@Controller('researchLogs')
export class ResearchLogController {
  constructor(private researchLogService: ResearchLogService) {}

  @Get()
  getResearchLogs(
    @Query() queryParams: GetResearchLogsQueryParams,
    @Req() req: Request,
  ) {
    return this.researchLogService.getResearchLogs(queryParams, req.url);
  }

  @Get(':researchLogId')
  getResearchLog(
    @Query() queryParams: GetResearchLogQueryParams,
    @Param('researchLogId') researchLogId: string,
    @Req() req: Request,
  ) {
    return this.researchLogService.getResearchLog(
      queryParams,
      researchLogId,
      req.url,
    );
  }

  @Post('create')
  createResearchLog(
    @Query() queryParams: CreateResearchLogQueryParams,
    @Body() dto: CreateResearchLogDto,
  ) {
    return this.researchLogService.createResearchLog(queryParams, dto);
  }

  @Patch(':researchLogId/update')
  updateResearchLog(
    @Param('researchLogId') researchLogId: string,
    @Body() dto: UpdateResearchLogDto,
  ) {
    return this.researchLogService.updateResearchLog(dto, researchLogId);
  }

  @Delete(':researchLogId/delete')
  deleteResearchLog(
    @Query() queryParams: DeleteResearchLogQueryParams,
    @Param('researchLogId') researchLogId: string,
  ) {
    return this.researchLogService.deleteResearchLog(
      queryParams,
      researchLogId,
    );
  }
}
