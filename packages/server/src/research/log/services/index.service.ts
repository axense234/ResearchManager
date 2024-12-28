// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetResearchLogsService } from './getResearchLogs.service';
import { GetResearchLogService } from './getResearchLog.service';
import { CreateResearchLogService } from './createResearchLog.service';
import { UpdateResearchLogService } from './updateResearchLog.service';
import { DeleteResearchLogService } from './deleteResearchLog.service';

@Injectable()
export class ResearchLogService {
  constructor(
    public GetResearchLogsService: GetResearchLogsService,
    public GetResearchLogService: GetResearchLogService,
    public CreateResearchLogService: CreateResearchLogService,
    public UpdateResearchLogService: UpdateResearchLogService,
    public DeleteResearchLogService: DeleteResearchLogService,
  ) {}
}
