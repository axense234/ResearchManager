// Validators
import { IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
// Types
import { ResearchActivityUpdateDataObject } from './ResearchActivityUpdateDataObject';
import { ResearchActivityIncludeObject } from './ResearchActivityIncludeObject';
import { ResearchActivitySelectObject } from './ResearchActivitySelectObject';
import { ResearchActivityWhereUniqueObject } from './ResearchActivityWhereUniqueObject';

export class ResearchActivityUpdateObject {
  @Type(() => ResearchActivityWhereUniqueObject)
  where: ResearchActivityWhereUniqueObject;

  @Type(() => ResearchActivityUpdateDataObject)
  data: ResearchActivityUpdateDataObject;

  @Type(() => ResearchActivityIncludeObject)
  @IsOptional()
  include?: ResearchActivityIncludeObject;

  @Type(() => ResearchActivitySelectObject)
  @IsOptional()
  select?: ResearchActivitySelectObject;
}
