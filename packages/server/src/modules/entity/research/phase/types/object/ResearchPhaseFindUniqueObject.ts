// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ResearchPhaseIncludeObject } from './ResearchPhaseIncludeObject';
import { ResearchPhaseSelectObject } from './ResearchPhaseSelectObject';
import { ResearchPhaseWhereUniqueObject } from './ResearchPhaseWhereUniqueObject';

export class ResearchPhaseFindUniqueObject {
  @Type(() => ResearchPhaseWhereUniqueObject)
  where: ResearchPhaseWhereUniqueObject;

  @Type(() => ResearchPhaseIncludeObject)
  @IsOptional()
  include?: ResearchPhaseIncludeObject;

  @Type(() => ResearchPhaseSelectObject)
  @IsOptional()
  select?: ResearchPhaseSelectObject;
}
