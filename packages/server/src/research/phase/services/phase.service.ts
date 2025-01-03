// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetResearchPhasesService } from './getResearchPhases.service';
import { GetResearchPhaseService } from './getResearchPhase.service';
import { CreateResearchPhaseService } from './createResearchPhase.service';
import { UpdateResearchPhaseService } from './updateResearchPhase.service';
import { DeleteResearchPhaseService } from './deleteResearchPhase.service';
// Types
import GetResearchPhasesQueryParams from '../types/GetResearchPhasesQueryParams';
// Dtos
import { CreateResearchPhaseDto, UpdateResearchPhaseDto } from '../dto';

@Injectable()
export class ResearchPhaseService {
  constructor(
    private getResearchPhasesService: GetResearchPhasesService,
    private getResearchPhaseService: GetResearchPhaseService,
    private createResearchPhaseService: CreateResearchPhaseService,
    private updateResearchPhaseService: UpdateResearchPhaseService,
    private deleteResearchPhaseService: DeleteResearchPhaseService,
  ) {}

  async getResearchPhases(
    queryParams: GetResearchPhasesQueryParams,
    url: string,
  ) {
    return await this.getResearchPhasesService.getResearchPhases(
      queryParams,
      url,
    );
  }

  async getResearchPhase(researchPhaseId: string, url: string) {
    return await this.getResearchPhaseService.getResearchPhase(
      researchPhaseId,
      url,
    );
  }

  async createResearchPhase(dto: CreateResearchPhaseDto) {
    return await this.createResearchPhaseService.createResearchPhase(dto);
  }

  async updateResearchPhase(
    dto: UpdateResearchPhaseDto,
    researchPhaseId: string,
  ) {
    return await this.updateResearchPhaseService.updateResearchPhase(
      dto,
      researchPhaseId,
    );
  }

  async deleteResearchPhase(researchPhaseId: string) {
    return await this.deleteResearchPhaseService.deleteResearchPhase(
      researchPhaseId,
    );
  }
}
