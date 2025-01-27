// Validators
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
// Types
import { ResearchPhaseIncludeObject } from './ResearchPhaseIncludeObject';
import { ResearchPhaseSelectObject } from './ResearchPhaseSelectObject';
import { ResearchPhaseWhereObject } from './ResearchPhaseWhereObject';
import { ResearchPhaseOrderByObject } from './ResearchPhaseOrderByObject';

export class ResearchPhaseFindManyObject {
  @Type(() => ResearchPhaseWhereObject)
  @IsOptional()
  where?: ResearchPhaseWhereObject;

  @Type(() => ResearchPhaseIncludeObject)
  @IsOptional()
  include?: ResearchPhaseIncludeObject;

  @Type(() => ResearchPhaseSelectObject)
  @IsOptional()
  select?: ResearchPhaseSelectObject;

  @ValidateNested()
  @Type(() => ResearchPhaseOrderByObject)
  @IsOptional()
  orderBy?: ResearchPhaseOrderByObject[];
}
