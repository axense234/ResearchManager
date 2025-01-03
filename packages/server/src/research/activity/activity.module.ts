// NestJS
import { Module } from '@nestjs/common';
// Controllers
import { ResearchActivityController } from './activity.controller';
// Services
import { ResearchActivityService } from './services/activity.service';
import { GetResearchActivitiesService } from './services/getResearchActivities.service';
import { GetResearchActivityService } from './services/getResearchActivity.service';
import { CreateResearchActivityService } from './services/createResearchActivity.service';
import { UpdateResearchActivityService } from './services/updateResearchActivity.service';
import { DeleteResearchActivityService } from './services/deleteResearchActivity.service';

@Module({
  providers: [
    ResearchActivityService,
    GetResearchActivitiesService,
    GetResearchActivityService,
    CreateResearchActivityService,
    UpdateResearchActivityService,
    DeleteResearchActivityService,
  ],
  controllers: [ResearchActivityController],
})
export class ResearchActivityModule {}
