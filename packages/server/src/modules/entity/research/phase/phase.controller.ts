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
import { ResearchPhaseService } from './services/phase.service';
// Dto
import { CreateResearchPhaseDto, UpdateResearchPhaseDto } from './dto';
// Types
import {
  CreateResearchPhaseQueryParams,
  DeleteResearchPhaseQueryParams,
  GetResearchPhaseQueryParams,
  GetResearchPhasesQueryParams,
  UpdateResearchPhaseQueryParams,
} from './types';

@UseGuards(JwtGuard)
@Controller('researchPhases')
export class ResearchPhaseController {
  constructor(private researchPhaseService: ResearchPhaseService) {}

  @Get()
  getResearchPhases(
    @Query() queryParams: GetResearchPhasesQueryParams,
    @Req() req: Request,
  ) {
    return this.researchPhaseService.getResearchPhases(queryParams, req.url);
  }

  @Get(':researchPhaseId')
  getResearchPhase(
    @Query() queryParams: GetResearchPhaseQueryParams,
    @Param('researchPhaseId') researchPhaseId: string,
    @Req() req: Request,
  ) {
    return this.researchPhaseService.getResearchPhase(
      queryParams,
      researchPhaseId,
      req.url,
    );
  }

  @Post('create')
  createResearchPhase(
    @Query() queryParams: CreateResearchPhaseQueryParams,
    @Body() dto: CreateResearchPhaseDto,
  ) {
    console.log(dto);
    return this.researchPhaseService.createResearchPhase(queryParams, dto);
  }

  @Patch(':researchPhaseId/update')
  updateResearchPhase(
    @Query() queryParams: UpdateResearchPhaseQueryParams,
    @Param('researchPhaseId') researchPhaseId: string,
    @Body() dto: UpdateResearchPhaseDto,
  ) {
    return this.researchPhaseService.updateResearchPhase(
      queryParams,
      dto,
      researchPhaseId,
    );
  }

  @Delete(':researchPhaseId/delete')
  deleteResearchPhase(
    @Query() queryParams: DeleteResearchPhaseQueryParams,
    @Param('researchPhaseId') researchPhaseId: string,
  ) {
    return this.researchPhaseService.deleteResearchPhase(
      queryParams,
      researchPhaseId,
    );
  }
}
