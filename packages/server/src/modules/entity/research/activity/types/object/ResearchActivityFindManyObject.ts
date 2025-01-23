import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { ResearchActivityIncludeObject } from './ResearchActivityIncludeObject';
import { ResearchActivitySelectObject } from './ResearchActivitySelectObject';
import { ResearchActivityWhereCustomObject } from './ResearchActivityWhereObject';
import { ResearchActivityOrderByObject } from './ResearchActivityOrderByObject';

export class ResearchActivityFindManyObject {
  @Type(() => ResearchActivityWhereCustomObject)
  @IsOptional()
  where?: ResearchActivityWhereCustomObject;

  @Type(() => ResearchActivityIncludeObject)
  @IsOptional()
  include?: ResearchActivityIncludeObject;

  @Type(() => ResearchActivitySelectObject)
  @IsOptional()
  select?: ResearchActivitySelectObject;

  @ValidateNested()
  @Type(() => ResearchActivityOrderByObject)
  @IsOptional()
  orderBy?: ResearchActivityOrderByObject[];
}
