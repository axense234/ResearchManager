// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetResearchActivitiesService } from './getResearchActivities.service';
import { GetResearchActivityService } from './getResearchActivity.service';
import { CreateResearchActivityService } from './createResearchActivity.service';
import { UpdateResearchActivityService } from './updateResearchActivity.service';
import { DeleteResearchActivityService } from './deleteResearchActivity.service';
// Dtos
import { CreateResearchActivityDto, UpdateResearchActivityDto } from '../dto';
// Types
import GetResearchActivitiesQueryParams from '../types/GetResearchActivitiesQueryParams';

@Injectable()
export class ResearchActivityService {
  constructor(
    private getResearchActivitiesService: GetResearchActivitiesService,
    private getResearchActivityService: GetResearchActivityService,
    private createResearchActivityService: CreateResearchActivityService,
    private updateResearchActivityService: UpdateResearchActivityService,
    private deleteResearchActivityService: DeleteResearchActivityService,
  ) {}

  async getResearchActivities(
    queryParams: GetResearchActivitiesQueryParams,
    url?: string,
  ) {
    return await this.getResearchActivitiesService.getResearchActivities(
      queryParams,
      url,
    );
  }

  async getResearchActivity(researchActivityId: string, url: string) {
    return await this.getResearchActivityService.getResearchActivity(
      researchActivityId,
      url,
    );
  }

  async createResearchActivity(dto: CreateResearchActivityDto) {
    return await this.createResearchActivityService.createResearchActivity(dto);
  }

  async updateResearchActivity(
    dto: UpdateResearchActivityDto,
    researchActivityId: string,
  ) {
    return await this.updateResearchActivityService.updateResearchActivity(
      dto,
      researchActivityId,
    );
  }

  async deleteResearchActivity(researchActivityId: string) {
    return await this.deleteResearchActivityService.deleteResearchActivity(
      researchActivityId,
    );
  }
}
