// NestJS
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
// Services
import { ResearchSessionService } from './researchSession.service';
// Types
import GetResearchSessionsQueryParams from './types/GetResearchSessionsQueryParams';
// Custom Guard
import { JwtGuard } from 'src/auth/guard';
// Dtos
import { CreateResearchSessionDto } from './dto';

@UseGuards(JwtGuard)
@Controller('researchSessions')
export class ResearchSessionController {
  constructor(private researchSessionService: ResearchSessionService) {}

  @Get()
  getResearchSessions(@Query() queryParams: GetResearchSessionsQueryParams) {
    return this.researchSessionService.getResearchSessions(queryParams);
  }

  @Get(':researchSessionId')
  getResearchSession(@Param('researchSessionId') researchSessionId: string) {
    return this.researchSessionService.getResearchSession(researchSessionId);
  }

  @Post('create')
  createResearchSession(@Body() dto: CreateResearchSessionDto) {
    return this.researchSessionService.createResearchSession(dto);
  }
}
