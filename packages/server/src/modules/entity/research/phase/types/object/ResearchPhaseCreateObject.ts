// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ResearchPhaseCreateDataObject } from './ResearchPhaseCreateDataObject';
import { ResearchPhaseIncludeObject } from './ResearchPhaseIncludeObject';
import { ResearchPhaseSelectObject } from './ResearchPhaseSelectObject';

export class ResearchPhaseCreateObject {
  @Type(() => ResearchPhaseCreateDataObject)
  data: ResearchPhaseCreateDataObject;

  @Type(() => ResearchPhaseIncludeObject)
  @IsOptional()
  include?: ResearchPhaseIncludeObject;

  @Type(() => ResearchPhaseSelectObject)
  @IsOptional()
  select?: ResearchPhaseSelectObject;
}
