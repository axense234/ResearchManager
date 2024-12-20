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
import { ResearchPhaseService } from './phase.service';
// Types
import GetResearchPhasesQueryParams from './types/GetResearchPhasesQueryParams';
// Dto
import { CreateResearchPhaseDto, UpdateResearchPhaseDto } from './dto';

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
    return this.researchPhaseService.createResearchPhase(dto);
  }

  @Patch(':researchPhaseId/update')
  updateResearchPhase(
    @Param('researchPhaseId') researchPhaseId: string,
    @Body() dto: UpdateResearchPhaseDto,
  ) {
    return this.researchPhaseService.updateResearchPhase(dto, researchPhaseId);
  }

  @Delete(':researchPhaseId/delete')
  deleteResearchPhase(@Param('researchPhaseId') researchPhaseId: string) {
    return this.researchPhaseService.deleteResearchPhase(researchPhaseId);
  }
}
