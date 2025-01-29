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
// Services
import { ResearchSessionService } from './services/session.service';
// Custom Guard
import { JwtGuard } from 'src/modules/entity/auth/guard';
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

@UseGuards(JwtGuard)
@Controller('researchSessions')
export class ResearchSessionController {
  constructor(private researchSessionService: ResearchSessionService) {}

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

  @Post('create')
  createResearchSession(
    @Query() queryParams: CreateResearchSessionQueryParams,
    @Body() dto: CreateResearchSessionDto,
  ) {
    return this.researchSessionService.createResearchSession(queryParams, dto);
  }

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
