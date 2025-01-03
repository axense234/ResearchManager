// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetResearchSessionsService } from './getResearchSessions.service';
import { GetResearchSessionService } from './getResearchSession.service';
import { CreateResearchSessionService } from './createResearchSession.service';
import { UpdateResearchSessionService } from './updateResearchSession.service';
import { DeleteResearchSessionService } from './deleteResearchSession.service';
// Types
import GetResearchSessionsQueryParams from '../types/GetResearchSessionsQueryParams';
// Dtos
import { CreateResearchSessionDto, UpdateResearchSessionDto } from '../dto';

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

  async getResearchSession(researchSessionId: string, url: string) {
    return await this.getResearchSessionService.getResearchSession(
      researchSessionId,
      url,
    );
  }

  async createResearchSession(dto: CreateResearchSessionDto) {
    return await this.createResearchSessionService.createResearchSession(dto);
  }

  async updateResearchSession(
    dto: UpdateResearchSessionDto,
    researchSessionId: string,
  ) {
    return await this.updateResearchSessionService.updateResearchSession(
      dto,
      researchSessionId,
    );
  }

  async deleteResearchSession(researchSessionId: string) {
    return await this.deleteResearchSessionService.deleteResearchSession(
      researchSessionId,
    );
  }
}
