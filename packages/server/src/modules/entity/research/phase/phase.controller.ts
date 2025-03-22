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
} from '@nestjs/common';
// Services
import { ResearchPhaseService } from './services/phase.service';
// Dto
import {
  CreateResearchPhaseDto,
  UpdateResearchPhaseDto,
} from '@researchmanager/shared/types';
// Swagger
import { ApiTags } from '@nestjs/swagger';
// Types
import {
  CreateResearchPhaseQueryParams,
  DeleteResearchPhaseQueryParams,
  GetResearchPhaseQueryParams,
  GetResearchPhasesQueryParams,
  UpdateResearchPhaseQueryParams,
} from './types';
// Custom Decorators
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';
import { SwaggerBody } from 'src/decorators/swagger/swaggerBody.decorator';
import { SwaggerPathParams } from 'src/decorators/swagger/swaggerPathParams.decorator';
import { SwaggerAuth } from 'src/decorators/swagger/swaggerAuth.decorator';
import { JwtAuth } from 'src/decorators/auth/jwtAuth.decorator';

@JwtAuth()
@SwaggerAuth()
@ApiTags('Research Phases')
@Controller('researchPhases')
export class ResearchPhaseController {
  constructor(private researchPhaseService: ResearchPhaseService) {}

  @SwaggerHead('researchPhase', 'GET MULTIPLE')
  @SwaggerResponses('researchPhase', 'GET MULTIPLE')
  @Get()
  getResearchPhases(
    @Query() queryParams: GetResearchPhasesQueryParams,
    @Req() req: Request,
  ) {
    return this.researchPhaseService.getResearchPhases(queryParams, req.url);
  }

  @SwaggerHead('researchPhase', 'GET SINGLE')
  @SwaggerResponses('researchPhase', 'GET SINGLE')
  @SwaggerPathParams('researchPhase', 'GET SINGLE')
  @Get(':researchPhaseId')
  getResearchPhase(
    @Query() queryParams: GetResearchPhaseQueryParams,
    @Param('researchPhaseId') researchPhaseId: string,
    @Req() req: Request,
  ) {
    return this.researchPhaseService.getResearchPhase(
      queryParams,
      researchPhaseId,
      req.url,
    );
  }

  @SwaggerHead('researchPhase', 'CREATE')
  @SwaggerBody('researchPhase', 'CREATE')
  @SwaggerResponses('researchPhase', 'CREATE')
  @Post('create')
  createResearchPhase(
    @Query() queryParams: CreateResearchPhaseQueryParams,
    @Body() dto: CreateResearchPhaseDto,
  ) {
    return this.researchPhaseService.createResearchPhase(queryParams, dto);
  }

  @SwaggerHead('researchPhase', 'UPDATE')
  @SwaggerBody('researchPhase', 'UPDATE')
  @SwaggerResponses('researchPhase', 'UPDATE')
  @SwaggerPathParams('researchPhase', 'UPDATE')
  @Patch(':researchPhaseId/update')
  updateResearchPhase(
    @Query() queryParams: UpdateResearchPhaseQueryParams,
    @Param('researchPhaseId') researchPhaseId: string,
    @Body() dto: UpdateResearchPhaseDto,
  ) {
    return this.researchPhaseService.updateResearchPhase(
      queryParams,
      dto,
      researchPhaseId,
    );
  }

  @SwaggerHead('researchPhase', 'DELETE')
  @SwaggerResponses('researchPhase', 'DELETE')
  @SwaggerPathParams('researchPhase', 'DELETE')
  @Delete(':researchPhaseId/delete')
  deleteResearchPhase(
    @Query() queryParams: DeleteResearchPhaseQueryParams,
    @Param('researchPhaseId') researchPhaseId: string,
  ) {
    return this.researchPhaseService.deleteResearchPhase(
      queryParams,
      researchPhaseId,
    );
  }
}
