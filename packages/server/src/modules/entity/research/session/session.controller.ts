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
import { ResearchSessionService } from './services/session.service';
// Dtos
import { CreateResearchSessionDto, UpdateResearchSessionDto } from './dto';
// Types
import {
  CreateResearchSessionQueryParams,
  DeleteResearchSessionQueryParams,
  GetResearchSessionQueryParams,
  GetResearchSessionsQueryParams,
  UpdateResearchSessionQueryParams,
} from './types';
// Swagger
import { ApiTags } from '@nestjs/swagger';
// Custom Decorators
import { JwtAuth } from 'src/decorators/auth/jwtAuth.decorator';
import { SwaggerAuth } from 'src/decorators/swagger/swaggerAuth.decorator';
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';
import { SwaggerBody } from 'src/decorators/swagger/swaggerBody.decorator';
import { SwaggerPathParams } from 'src/decorators/swagger/swaggerPathParams.decorator';

@JwtAuth()
@SwaggerAuth()
@ApiTags('Research Sessions')
@Controller('researchSessions')
export class ResearchSessionController {
  constructor(private researchSessionService: ResearchSessionService) {}

  @SwaggerHead('researchSession', 'GET MULTIPLE')
  @SwaggerResponses('researchSession', 'GET MULTIPLE')
  @Get()
  getResearchSessions(
    @Query() queryParams: GetResearchSessionsQueryParams,
    @Req() req: Request,
  ) {
    return this.researchSessionService.getResearchSessions(
      queryParams,
      req.url,
    );
  }

  @SwaggerHead('researchSession', 'GET SINGLE')
  @SwaggerResponses('researchSession', 'GET SINGLE')
  @SwaggerPathParams('researchSession', 'GET SINGLE')
  @Get(':researchSessionId')
  getResearchSession(
    @Query() queryParams: GetResearchSessionQueryParams,
    @Param('researchSessionId') researchSessionId: string,
    @Req() req: Request,
  ) {
    return this.researchSessionService.getResearchSession(
      queryParams,
      researchSessionId,
      req.url,
    );
  }

  @SwaggerHead('researchSession', 'CREATE')
  @SwaggerBody('researchSession', 'CREATE')
  @SwaggerResponses('researchSession', 'CREATE')
  @Post('create')
  createResearchSession(
    @Query() queryParams: CreateResearchSessionQueryParams,
    @Body() dto: CreateResearchSessionDto,
  ) {
    return this.researchSessionService.createResearchSession(queryParams, dto);
  }

  @SwaggerHead('researchSession', 'UPDATE')
  @SwaggerBody('researchSession', 'UPDATE')
  @SwaggerResponses('researchSession', 'UPDATE')
  @SwaggerPathParams('researchSession', 'UPDATE')
  @Patch(':researchSessionId/update')
  updateResearchSession(
    @Query() queryParams: UpdateResearchSessionQueryParams,
    @Param('researchSessionId') researchSessionId: string,
    @Body() dto: UpdateResearchSessionDto,
  ) {
    return this.researchSessionService.updateResearchSession(
      queryParams,
      dto,
      researchSessionId,
    );
  }

  @SwaggerHead('researchSession', 'DELETE')
  @SwaggerResponses('researchSession', 'DELETE')
  @SwaggerPathParams('researchSession', 'DELETE')
  @Delete(':researchSessionId/delete')
  deleteResearchSession(
    @Query() queryParams: DeleteResearchSessionQueryParams,
    @Param('researchSessionId') researchSessionId: string,
  ) {
    return this.researchSessionService.deleteResearchSession(
      queryParams,
      researchSessionId,
    );
  }
}
