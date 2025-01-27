// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetResearchLogsService } from './getResearchLogs.service';
import { GetResearchLogService } from './getResearchLog.service';
import { CreateResearchLogService } from './createResearchLog.service';
import { UpdateResearchLogService } from './updateResearchLog.service';
import { DeleteResearchLogService } from './deleteResearchLog.service';
// Types
import {
  CreateResearchLogQueryParams,
  DeleteResearchLogQueryParams,
  GetResearchLogQueryParams,
  GetResearchLogsQueryParams,
  UpdateResearchLogQueryParams,
} from '../types';
// Dtos
import { CreateResearchLogDto, UpdateResearchLogDto } from '../dto';

@Injectable()
export class ResearchLogService {
  constructor(
    private getResearchLogsService: GetResearchLogsService,
    private getResearchLogService: GetResearchLogService,
    private createResearchLogService: CreateResearchLogService,
    private updateResearchLogService: UpdateResearchLogService,
    private deleteResearchLogService: DeleteResearchLogService,
  ) {}

  async getResearchLogs(queryParams: GetResearchLogsQueryParams, url: string) {
    return await this.getResearchLogsService.getResearchLogs(queryParams, url);
  }

  async getResearchLog(
    queryParams: GetResearchLogQueryParams,
    researchLogId: string,
    url: string,
  ) {
    return await this.getResearchLogService.getResearchLog(
      queryParams,
      researchLogId,
      url,
    );
  }

  async createResearchLog(
    queryParams: CreateResearchLogQueryParams,
    dto: CreateResearchLogDto,
  ) {
    return await this.createResearchLogService.createResearchLog(
      queryParams,
      dto,
    );
  }

  async updateResearchLog(
    queryParams: UpdateResearchLogQueryParams,
    dto: UpdateResearchLogDto,
    researchLogId: string,
  ) {
    return await this.updateResearchLogService.updateResearchLog(
      queryParams,
      dto,
      researchLogId,
    );
  }

  async deleteResearchLog(
    queryParams: DeleteResearchLogQueryParams,
    researchLogId: string,
  ) {
    return await this.deleteResearchLogService.deleteResearchLog(
      queryParams,
      researchLogId,
    );
  }
}
