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
import { JwtGuard } from 'src/modules/entity/auth/guard';
// Dto
import { CreateResearchActivityDto, UpdateResearchActivityDto } from './dto';
// Services
import { ResearchActivityService } from './services/activity.service';
// Types
import { GetResearchActivitiesQueryParams } from './types/params/GetResearchActivitiesQueryParams';
import { GetResearchActivityQueryParams } from './types/params/GetResearchActivityQueryParams';
import { CreateResearchActivityQueryParams } from './types/params/CreateResearchActivityQueryParams';
import { DeleteResearchActivityQueryParams } from './types/params/DeleteResearchActivityQueryParams';
import { UpdateResearchActivityQueryParams } from './types/params/UpdateResearchActivityQueryParams';

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
    @Query() queryParams: GetResearchActivityQueryParams,
    @Param('researchActivityId') researchActivityId: string,
    @Req() req: Request,
  ) {
    return this.researchActivityService.getResearchActivity(
      queryParams,
      researchActivityId,
      req.url,
    );
  }

  @Post('create')
  createResearchActivity(
    @Query() queryParams: CreateResearchActivityQueryParams,
    @Body() dto: CreateResearchActivityDto,
  ) {
    return this.researchActivityService.createResearchActivity(
      queryParams,
      dto,
    );
  }

  @Patch(':researchActivityId/update')
  updateResearchActivity(
    @Query() queryParams: UpdateResearchActivityQueryParams,
    @Param('researchActivityId') researchActivityId: string,
    @Body() dto: UpdateResearchActivityDto,
  ) {
    return this.researchActivityService.updateResearchActivity(
      queryParams,
      dto,
      researchActivityId,
    );
  }

  @Delete(':researchActivityId/delete')
  deleteResearchActivity(
    @Query() queryParams: DeleteResearchActivityQueryParams,
    @Param('researchActivityId') researchActivityId: string,
  ) {
    return this.researchActivityService.deleteResearchActivity(
      queryParams,
      researchActivityId,
    );
  }
}
