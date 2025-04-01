// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetResearchPhasesService } from './getResearchPhases.service';
import { GetResearchPhaseService } from './getResearchPhase.service';
import { CreateResearchPhaseService } from './createResearchPhase.service';
import { UpdateResearchPhaseService } from './updateResearchPhase.service';
import { DeleteResearchPhaseService } from './deleteResearchPhase.service';
// Dtos
import {
  CreateResearchPhaseDto,
  GetResearchPhasesQueryParams,
  UpdateResearchPhaseDto,
} from '@researchmanager/shared/types';
// Types
import {
  CreateResearchPhaseQueryParams,
  DeleteResearchPhaseQueryParams,
  GetResearchPhaseQueryParams,
  UpdateResearchPhaseQueryParams,
} from '../types';

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

  async getResearchPhase(
    queryParams: GetResearchPhaseQueryParams,
    researchPhaseId: string,
    url: string,
  ) {
    return await this.getResearchPhaseService.getResearchPhase(
      queryParams,
      researchPhaseId,
      url,
    );
  }

  async createResearchPhase(
    queryParams: CreateResearchPhaseQueryParams,
    dto: CreateResearchPhaseDto,
  ) {
    return await this.createResearchPhaseService.createResearchPhase(
      queryParams,
      dto,
    );
  }

  async updateResearchPhase(
    queryParams: UpdateResearchPhaseQueryParams,
    dto: UpdateResearchPhaseDto,
    researchPhaseId: string,
  ) {
    return await this.updateResearchPhaseService.updateResearchPhase(
      queryParams,
      dto,
      researchPhaseId,
    );
  }

  async deleteResearchPhase(
    queryParams: DeleteResearchPhaseQueryParams,
    researchPhaseId: string,
  ) {
    return await this.deleteResearchPhaseService.deleteResearchPhase(
      queryParams,
      researchPhaseId,
    );
  }
}
