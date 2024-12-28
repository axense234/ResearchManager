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
// Services
import { ResearchSessionService } from './services/index.service';
// Types
import GetResearchSessionsQueryParams from './types/GetResearchSessionsQueryParams';
// Custom Guard
import { JwtGuard } from 'src/auth/guard';
// Dtos
import { CreateResearchSessionDto, UpdateResearchSessionDto } from './dto';

@UseGuards(JwtGuard)
@Controller('researchSessions')
export class ResearchSessionController {
  constructor(private researchSessionService: ResearchSessionService) {}

  @Get()
  getResearchSessions(
    @Query() queryParams: GetResearchSessionsQueryParams,
    @Req() req: Request,
  ) {
    return this.researchSessionService.GetResearchSessionsService.getResearchSessions(
      queryParams,
      req.url,
    );
  }

  @Get(':researchSessionId')
  getResearchSession(
    @Param('researchSessionId') researchSessionId: string,
    @Req() req: Request,
  ) {
    return this.researchSessionService.GetResearchSessionService.getResearchSession(
      researchSessionId,
      req.url,
    );
  }

  @Post('create')
  createResearchSession(@Body() dto: CreateResearchSessionDto) {
    return this.researchSessionService.CreateResearchSessionService.createResearchSession(
      dto,
    );
  }

  @Patch(':researchSessionId/update')
  updateResearchSession(
    @Param('researchSessionId') researchSessionId: string,
    @Body() dto: UpdateResearchSessionDto,
  ) {
    return this.researchSessionService.UpdateResearchSessionService.updateResearchSession(
      dto,
      researchSessionId,
    );
  }

  @Delete(':researchSessionId/delete')
  deleteResearchSession(@Param('researchSessionId') researchSessionId: string) {
    return this.researchSessionService.DeleteResearchSessionService.deleteResearchSession(
      researchSessionId,
    );
  }
}
