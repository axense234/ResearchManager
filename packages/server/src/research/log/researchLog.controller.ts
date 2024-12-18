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
  UseGuards,
} from '@nestjs/common';
// Custom Guard
import { JwtGuard } from 'src/auth/guard';
// Services
import { ResearchLogService } from './researchLog.service';
// Types
import GetResearchLogsQueryParams from './types/GetResearchLogsQueryParams';
// Dtos
import { CreateResearchLogDto, UpdateResearchLogDto } from './dto';

@UseGuards(JwtGuard)
@Controller('researchLogs')
export class ResearchLogController {
  constructor(private researchLogService: ResearchLogService) {}

  @Get()
  getResearchLogs(@Query() queryParams: GetResearchLogsQueryParams) {
    return this.researchLogService.getResearchLogs(queryParams);
  }

  @Get(':researchLogId')
  getResearchLog(@Param('researchLogId') researchLogId: string) {
    return this.researchLogService.getResearchLog(researchLogId);
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
