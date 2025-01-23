// Types
import { IsOptional } from 'class-validator';
import { ResearchActivityIncludeObject } from './ResearchActivityIncludeObject';
import { ResearchActivitySelectObject } from './ResearchActivitySelectObject';
import { ResearchActivityWhereUniqueCustomObject } from './ResearchActivityWhereUniqueObject';
import { Type } from 'class-transformer';

export class ResearchActivityFindUniqueObject {
  @Type(() => ResearchActivityWhereUniqueCustomObject)
  where: ResearchActivityWhereUniqueCustomObject;

  @Type(() => ResearchActivityIncludeObject)
  @IsOptional()
  include?: ResearchActivityIncludeObject;

  @Type(() => ResearchActivitySelectObject)
  @IsOptional()
  select?: ResearchActivitySelectObject;
}
