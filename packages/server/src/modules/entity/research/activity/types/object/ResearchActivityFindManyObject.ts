// Validators
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
// Types
import { ResearchActivityIncludeObject } from './ResearchActivityIncludeObject';
import { ResearchActivitySelectObject } from './ResearchActivitySelectObject';
import { ResearchActivityWhereObject } from './ResearchActivityWhereObject';
import { ResearchActivityOrderByObject } from './ResearchActivityOrderByObject';

export class ResearchActivityFindManyObject {
  @Type(() => ResearchActivityWhereObject)
  @IsOptional()
  where?: ResearchActivityWhereObject;

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
