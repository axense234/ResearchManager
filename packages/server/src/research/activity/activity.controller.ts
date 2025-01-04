// NestJS
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
// Custom Guard
import { JwtGuard } from 'src/auth/guard';
// Dto
import { CreateResearchActivityDto, UpdateResearchActivityDto } from './dto';
// Services
import { ResearchActivityService } from './services/activity.service';
// Types
import GetResearchActivitiesQueryParams from './types/GetResearchActivitiesQueryParams';

@UseGuards(JwtGuard)
@Controller('researchActivities')
export class ResearchActivityController {
  constructor(private researchActivityService: ResearchActivityService) {}

  @Get()
  getResearchActivities(
    @Query() queryParams: GetResearchActivitiesQueryParams,
    @Req() req: Request,
  ) {
    return this.researchActivityService.getResearchActivities(
      queryParams,
      req.url,
    );
  }

  @Get(':researchActivityId')
  getResearchActivity(
    @Param('researchActivityId') researchActivityId: string,
    @Req() req: Request,
  ) {
    return this.researchActivityService.getResearchActivity(
      researchActivityId,
      req.url,
    );
  }

  @Post('create')
  createResearchActivity(@Body() dto: CreateResearchActivityDto) {
    return this.researchActivityService.createResearchActivity(dto);
  }

  @Patch(':researchActivityId/update')
  updateResearchActivity(
    @Param('researchActivityId') researchActivityId: string,
    @Body() dto: UpdateResearchActivityDto,
  ) {
    return this.researchActivityService.updateResearchActivity(
      dto,
      researchActivityId,
    );
  }

  @Delete(':researchActivityId/delete')
  deleteResearchActivity(
    @Param('researchActivityId') researchActivityId: string,
  ) {
    return this.researchActivityService.deleteResearchActivity(
      researchActivityId,
    );
  }
}
