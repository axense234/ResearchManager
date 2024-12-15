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
// Custom Guard
import { JwtGuard } from 'src/auth/guard';
// Services
import { ResearchPhaseService } from './researchPhase.service';
// Types
import GetResearchPhasesQueryParams from './types/GetResearchPhasesQueryParams';
// Dto
import { CreateResearchPhaseDto } from './dto';

@UseGuards(JwtGuard)
@Controller('researchPhases')
export class ResearchPhaseController {
  constructor(private researchPhaseService: ResearchPhaseService) {}

  @Get()
  getResearchPhases(@Query() queryParams: GetResearchPhasesQueryParams) {
    return this.researchPhaseService.getResearchPhases(queryParams);
  }

  @Get(':researchPhaseId')
  getResearchPhase(@Param('researchPhaseId') researchPhaseId: string) {
    return this.researchPhaseService.getResearchPhase(researchPhaseId);
  }

  @Post('create')
  createResearchPhase(@Body() dto: CreateResearchPhaseDto) {
    console.log(dto);
  }
}
