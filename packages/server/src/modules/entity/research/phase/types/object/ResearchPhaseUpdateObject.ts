// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ResearchPhaseIncludeObject } from './ResearchPhaseIncludeObject';
import { ResearchPhaseSelectObject } from './ResearchPhaseSelectObject';
import { ResearchPhaseWhereUniqueObject } from './ResearchPhaseWhereUniqueObject';
import { ResearchPhaseUpdateDataObject } from './ResearchPhaseUpdateDataObject';

export class ResearchPhaseUpdateObject {
  @Type(() => ResearchPhaseWhereUniqueObject)
  where: ResearchPhaseWhereUniqueObject;

  @Type(() => ResearchPhaseUpdateDataObject)
  data: ResearchPhaseUpdateDataObject;

  @Type(() => ResearchPhaseIncludeObject)
  @IsOptional()
  include?: ResearchPhaseIncludeObject;

  @Type(() => ResearchPhaseSelectObject)
  @IsOptional()
  select?: ResearchPhaseSelectObject;
}
