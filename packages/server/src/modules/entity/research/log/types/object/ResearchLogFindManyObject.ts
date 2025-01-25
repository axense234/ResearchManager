// Validators
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
// Types
import { ResearchLogIncludeObject } from './ResearchLogIncludeObject';
import { ResearchLogSelectObject } from './ResearchLogSelectObject';
import { ResearchLogWhereObject } from './ResearchLogWhereObject';
import { ResearchLogOrderByObject } from './ResearchLogOrderByObject';

export class ResearchLogFindManyObject {
  @Type(() => ResearchLogWhereObject)
  @IsOptional()
  where?: ResearchLogWhereObject;

  @Type(() => ResearchLogIncludeObject)
  @IsOptional()
  include?: ResearchLogIncludeObject;

  @Type(() => ResearchLogSelectObject)
  @IsOptional()
  select?: ResearchLogSelectObject;

  @ValidateNested()
  @Type(() => ResearchLogOrderByObject)
  @IsOptional()
  orderBy?: ResearchLogOrderByObject[];
}
