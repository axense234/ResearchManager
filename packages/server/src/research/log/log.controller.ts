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
import { JwtGuard } from 'src/auth/guard';
// Services
import { ResearchLogService } from './services/index.service';
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
    return this.researchLogService.GetResearchLogsService.getResearchLogs(
      queryParams,
      req.url,
    );
  }

  @Get(':researchLogId')
  getResearchLog(
    @Param('researchLogId') researchLogId: string,
    @Req() req: Request,
  ) {
    return this.researchLogService.GetResearchLogService.getResearchLog(
      researchLogId,
      req.url,
    );
  }

  @Post('create')
  createResearchLog(@Body() dto: CreateResearchLogDto) {
    return this.researchLogService.CreateResearchLogService.createResearchLog(
      dto,
    );
  }

  @Patch(':researchLogId/update')
  updateResearchLog(
    @Param('researchLogId') researchLogId: string,
    @Body() dto: UpdateResearchLogDto,
  ) {
    return this.researchLogService.UpdateResearchLogService.updateResearchLog(
      dto,
      researchLogId,
    );
  }

  @Delete(':researchLogId/delete')
  deleteResearchLog(@Param('researchLogId') researchLogId: string) {
    return this.researchLogService.DeleteResearchLogService.deleteResearchLog(
      researchLogId,
    );
  }
}
