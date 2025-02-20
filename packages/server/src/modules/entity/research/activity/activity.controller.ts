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
// Swagger
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// Custom Decorators
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';
import { SwaggerBody } from 'src/decorators/swagger/swaggerBody.decorator';
import { SwaggerPathParams } from 'src/decorators/swagger/swaggerPathParams.decorator';

@UseGuards(JwtGuard)
@ApiBearerAuth()
@ApiTags('Research Activities')
@Controller('researchActivities')
export class ResearchActivityController {
  constructor(private researchActivityService: ResearchActivityService) {}

  @SwaggerHead('researchActivity', 'GET MULTIPLE')
  @SwaggerResponses('researchActivity', 'GET MULTIPLE')
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

  @SwaggerHead('researchActivity', 'GET SINGLE')
  @SwaggerResponses('researchActivity', 'GET SINGLE')
  @SwaggerPathParams('researchActivity', 'GET SINGLE')
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

  @SwaggerHead('researchActivity', 'CREATE')
  @SwaggerBody('researchActivity', 'CREATE')
  @SwaggerResponses('researchActivity', 'CREATE')
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

  @SwaggerHead('researchActivity', 'UPDATE')
  @SwaggerBody('researchActivity', 'UPDATE')
  @SwaggerResponses('researchActivity', 'UPDATE')
  @SwaggerPathParams('researchActivity', 'UPDATE')
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

  @SwaggerHead('researchActivity', 'DELETE')
  @SwaggerResponses('researchActivity', 'DELETE')
  @SwaggerPathParams('researchActivity', 'DELETE')
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
