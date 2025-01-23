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
import { GetResearchActivitiesQueryParams } from '../types/params/GetResearchActivitiesQueryParams';
import { GetResearchActivityQueryParams } from '../types/params/GetResearchActivityQueryParams';
import { CreateResearchActivityQueryParams } from '../types/params/CreateResearchActivityQueryParams';
import { DeleteResearchActivityQueryParams } from '../types/params/DeleteResearchActivityQueryParams';
import { UpdateResearchActivityQueryParams } from '../types/params/UpdateResearchActivityQueryParams';

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

  async getResearchActivity(
    queryParams: GetResearchActivityQueryParams,
    researchActivityId: string,
    url: string,
  ) {
    return await this.getResearchActivityService.getResearchActivity(
      queryParams,
      researchActivityId,
      url,
    );
  }

  async createResearchActivity(
    queryParams: CreateResearchActivityQueryParams,
    dto: CreateResearchActivityDto,
  ) {
    return await this.createResearchActivityService.createResearchActivity(
      queryParams,
      dto,
    );
  }

  async updateResearchActivity(
    queryParams: UpdateResearchActivityQueryParams,
    dto: UpdateResearchActivityDto,
    researchActivityId: string,
  ) {
    return await this.updateResearchActivityService.updateResearchActivity(
      queryParams,
      dto,
      researchActivityId,
    );
  }

  async deleteResearchActivity(
    queryParams: DeleteResearchActivityQueryParams,
    researchActivityId: string,
  ) {
    return await this.deleteResearchActivityService.deleteResearchActivity(
      queryParams,
      researchActivityId,
    );
  }
}
