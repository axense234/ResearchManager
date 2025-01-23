// Types
import { IsOptional } from 'class-validator';
import { ResearchActivityUpdateDataObject } from './ResearchActivityUpdateDataObject';
import { ResearchActivityWhereUniqueCustomObject } from './ResearchActivityWhereUniqueObject';
import { ResearchActivityIncludeObject } from './ResearchActivityIncludeObject';
import { ResearchActivitySelectObject } from './ResearchActivitySelectObject';
import { Type } from 'class-transformer';

export class ResearchActivityUpdateObject {
  @Type(() => ResearchActivityWhereUniqueCustomObject)
  where: ResearchActivityWhereUniqueCustomObject;

  @Type(() => ResearchActivityUpdateDataObject)
  data: ResearchActivityUpdateDataObject;

  @Type(() => ResearchActivityIncludeObject)
  @IsOptional()
  include?: ResearchActivityIncludeObject;

  @Type(() => ResearchActivitySelectObject)
  @IsOptional()
  select?: ResearchActivitySelectObject;
}
