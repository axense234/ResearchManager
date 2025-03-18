// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetResearchSessionsService } from './getResearchSessions.service';
import { GetResearchSessionService } from './getResearchSession.service';
import { CreateResearchSessionService } from './createResearchSession.service';
import { UpdateResearchSessionService } from './updateResearchSession.service';
import { DeleteResearchSessionService } from './deleteResearchSession.service';
// Dtos
import type {
  CreateResearchSessionDto,
  UpdateResearchSessionDto,
} from '@researchmanager/shared/types';
// Types
import {
  CreateResearchSessionQueryParams,
  DeleteResearchSessionQueryParams,
  GetResearchSessionQueryParams,
  GetResearchSessionsQueryParams,
  UpdateResearchSessionQueryParams,
} from '../types';

@Injectable()
export class ResearchSessionService {
  constructor(
    private getResearchSessionsService: GetResearchSessionsService,
    private getResearchSessionService: GetResearchSessionService,
    private createResearchSessionService: CreateResearchSessionService,
    private updateResearchSessionService: UpdateResearchSessionService,
    private deleteResearchSessionService: DeleteResearchSessionService,
  ) {}

  async getResearchSessions(
    queryParams: GetResearchSessionsQueryParams,
    url: string,
  ) {
    return await this.getResearchSessionsService.getResearchSessions(
      queryParams,
      url,
    );
  }

  async getResearchSession(
    queryParams: GetResearchSessionQueryParams,
    researchSessionId: string,
    url: string,
  ) {
    return await this.getResearchSessionService.getResearchSession(
      queryParams,
      researchSessionId,
      url,
    );
  }

  async createResearchSession(
    queryParams: CreateResearchSessionQueryParams,
    dto: CreateResearchSessionDto,
  ) {
    return await this.createResearchSessionService.createResearchSession(
      queryParams,
      dto,
    );
  }

  async updateResearchSession(
    queryParams: UpdateResearchSessionQueryParams,
    dto: UpdateResearchSessionDto,
    researchSessionId: string,
  ) {
    return await this.updateResearchSessionService.updateResearchSession(
      queryParams,
      dto,
      researchSessionId,
    );
  }

  async deleteResearchSession(
    queryParams: DeleteResearchSessionQueryParams,
    researchSessionId: string,
  ) {
    return await this.deleteResearchSessionService.deleteResearchSession(
      queryParams,
      researchSessionId,
    );
  }
}
