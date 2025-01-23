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
// Types
import GetResearchLogsQueryParams from './types/GetResearchLogsQueryParams';
// Dtos
import { CreateResearchLogDto, UpdateResearchLogDto } from './dto';

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
    @Param('researchLogId') researchLogId: string,
    @Req() req: Request,
  ) {
    return this.researchLogService.getResearchLog(researchLogId, req.url);
  }

  @Post('create')
  createResearchLog(@Body() dto: CreateResearchLogDto) {
    return this.researchLogService.createResearchLog(dto);
  }

  @Patch(':researchLogId/update')
  updateResearchLog(
    @Param('researchLogId') researchLogId: string,
    @Body() dto: UpdateResearchLogDto,
  ) {
    return this.researchLogService.updateResearchLog(dto, researchLogId);
  }

  @Delete(':researchLogId/delete')
  deleteResearchLog(@Param('researchLogId') researchLogId: string) {
    return this.researchLogService.deleteResearchLog(researchLogId);
  }
}
