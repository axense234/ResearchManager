// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetResearchLogsService } from './getResearchLogs.service';
import { GetResearchLogService } from './getResearchLog.service';
import { CreateResearchLogService } from './createResearchLog.service';
import { UpdateResearchLogService } from './updateResearchLog.service';
import { DeleteResearchLogService } from './deleteResearchLog.service';
// Types
import GetResearchLogsQueryParams from '../types/GetResearchLogsQueryParams';
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

  async getResearchLog(researchLogId: string, url: string) {
    return await this.getResearchLogService.getResearchLog(researchLogId, url);
  }

  async createResearchLog(dto: CreateResearchLogDto) {
    return await this.createResearchLogService.createResearchLog(dto);
  }

  async updateResearchLog(dto: UpdateResearchLogDto, researchLogId: string) {
    return await this.updateResearchLogService.updateResearchLog(
      dto,
      researchLogId,
    );
  }

  async deleteResearchLog(researchLogId: string) {
    return await this.deleteResearchLogService.deleteResearchLog(researchLogId);
  }
}
