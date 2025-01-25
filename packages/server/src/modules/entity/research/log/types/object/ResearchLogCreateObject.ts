// Types
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
// Types
import { ResearchLogCreateDataObject } from './ResearchLogCreateDataObject';
import { ResearchLogIncludeObject } from './ResearchLogIncludeObject';
import { ResearchLogSelectObject } from './ResearchLogSelectObject';

export class ResearchLogCreateObject {
  @Type(() => ResearchLogCreateDataObject)
  data: ResearchLogCreateDataObject;

  @Type(() => ResearchLogIncludeObject)
  @IsOptional()
  include?: ResearchLogIncludeObject;

  @Type(() => ResearchLogSelectObject)
  @IsOptional()
  select?: ResearchLogSelectObject;
}
