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
import { ResearchSessionService } from './services/session.service';
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
    return this.researchSessionService.getResearchSessions(
      queryParams,
      req.url,
    );
  }

  @Get(':researchSessionId')
  getResearchSession(
    @Param('researchSessionId') researchSessionId: string,
    @Req() req: Request,
  ) {
    return this.researchSessionService.getResearchSession(
      researchSessionId,
      req.url,
    );
  }

  @Post('create')
  createResearchSession(@Body() dto: CreateResearchSessionDto) {
    return this.researchSessionService.createResearchSession(dto);
  }

  @Patch(':researchSessionId/update')
  updateResearchSession(
    @Param('researchSessionId') researchSessionId: string,
    @Body() dto: UpdateResearchSessionDto,
  ) {
    return this.researchSessionService.updateResearchSession(
      dto,
      researchSessionId,
    );
  }

  @Delete(':researchSessionId/delete')
  deleteResearchSession(@Param('researchSessionId') researchSessionId: string) {
    return this.researchSessionService.deleteResearchSession(researchSessionId);
  }
}
