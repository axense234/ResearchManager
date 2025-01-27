// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ResearchActivityIncludeObject } from './ResearchActivityIncludeObject';
import { ResearchActivitySelectObject } from './ResearchActivitySelectObject';
import { ResearchActivityCreateDataObject } from './ResearchActivityCreateDataObject';

export class ResearchActivityCreateObject {
  @Type(() => ResearchActivityCreateDataObject)
  data: ResearchActivityCreateDataObject;

  @Type(() => ResearchActivityIncludeObject)
  @IsOptional()
  include?: ResearchActivityIncludeObject;

  @Type(() => ResearchActivitySelectObject)
  @IsOptional()
  select?: ResearchActivitySelectObject;
}
