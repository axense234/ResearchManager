// Types
import { IsOptional } from 'class-validator';
import { ResearchActivityIncludeObject } from './ResearchActivityIncludeObject';
import { ResearchActivitySelectObject } from './ResearchActivitySelectObject';
import { ResearchActivityCreateDataObject } from './ResearchActivityCreateDataObject';
import { Type } from 'class-transformer';

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
