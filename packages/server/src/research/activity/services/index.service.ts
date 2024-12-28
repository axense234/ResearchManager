// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetResearchActivitiesService } from './getResearchActivities.service';
import { GetResearchActivityService } from './getResearchActivity.service';
import { CreateResearchActivityService } from './createResearchActivity.service';
import { UpdateResearchActivityService } from './updateResearchActivity.service';
import { DeleteResearchActivityService } from './deleteResearchActivity.service';

@Injectable()
export class ResearchActivityService {
  constructor(
    public GetResearchActivitiesService: GetResearchActivitiesService,
    public GetResearchActivityService: GetResearchActivityService,
    public CreateResearchActivityService: CreateResearchActivityService,
    public UpdateResearchActivityService: UpdateResearchActivityService,
    public DeleteResearchActivityService: DeleteResearchActivityService,
  ) {}
}
