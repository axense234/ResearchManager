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
import { ResearchLogService } from './services/log.service';
// Dtos
import {
  CreateResearchLogDto,
  UpdateResearchLogDto,
} from '@researchmanager/shared/types';
// Types
import {
  CreateResearchLogQueryParams,
  DeleteResearchLogQueryParams,
  GetResearchLogQueryParams,
  UpdateResearchLogQueryParams,
} from './types';
// Swagger
import { ApiTags } from '@nestjs/swagger';
import { GetResearchLogsQueryParamsSwaggerWrapper } from './data';
// Custom Decorators
import { JwtAuth } from 'src/decorators/auth/jwtAuth.decorator';
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';
import { SwaggerAuth } from 'src/decorators/swagger/swaggerAuth.decorator';
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';
import { SwaggerBody } from 'src/decorators/swagger/swaggerBody.decorator';
import { SwaggerPathParams } from 'src/decorators/swagger/swaggerPathParams.decorator';

@JwtAuth()
@SwaggerAuth()
@ApiTags('Research Logs')
@Controller('researchLogs')
export class ResearchLogController {
  constructor(private researchLogService: ResearchLogService) {}

  @SwaggerHead('researchLog', 'GET MULTIPLE')
  @SwaggerResponses('researchLog', 'GET MULTIPLE')
  @Get()
  getResearchLogs(
    @Query() queryParams: GetResearchLogsQueryParamsSwaggerWrapper,
    @Req() req: Request,
  ) {
    return this.researchLogService.getResearchLogs(queryParams, req.url);
  }

  @SwaggerHead('researchLog', 'GET SINGLE')
  @SwaggerResponses('researchLog', 'GET SINGLE')
  @SwaggerPathParams('researchLog', 'GET SINGLE')
  @Get(':researchLogId')
  getResearchLog(
    @Query() queryParams: GetResearchLogQueryParams,
    @Param('researchLogId') researchLogId: string,
    @Req() req: Request,
  ) {
    return this.researchLogService.getResearchLog(
      queryParams,
      researchLogId,
      req.url,
    );
  }

  @SwaggerHead('researchLog', 'CREATE')
  @SwaggerBody('researchLog', 'CREATE')
  @SwaggerResponses('researchLog', 'CREATE')
  @Post('create')
  createResearchLog(
    @Query() queryParams: CreateResearchLogQueryParams,
    @Body() dto: CreateResearchLogDto,
  ) {
    return this.researchLogService.createResearchLog(queryParams, dto);
  }

  @SwaggerHead('researchLog', 'UPDATE')
  @SwaggerBody('researchLog', 'UPDATE')
  @SwaggerResponses('researchLog', 'UPDATE')
  @SwaggerPathParams('researchLog', 'UPDATE')
  @Patch(':researchLogId/update')
  updateResearchLog(
    @Query() queryParams: UpdateResearchLogQueryParams,
    @Param('researchLogId') researchLogId: string,
    @Body() dto: UpdateResearchLogDto,
  ) {
    return this.researchLogService.updateResearchLog(
      queryParams,
      dto,
      researchLogId,
    );
  }

  @SwaggerHead('researchLog', 'DELETE')
  @SwaggerResponses('researchLog', 'DELETE')
  @SwaggerPathParams('researchLog', 'DELETE')
  @Delete(':researchLogId/delete')
  deleteResearchLog(
    @Query() queryParams: DeleteResearchLogQueryParams,
    @Param('researchLogId') researchLogId: string,
  ) {
    return this.researchLogService.deleteResearchLog(
      queryParams,
      researchLogId,
    );
  }
}
