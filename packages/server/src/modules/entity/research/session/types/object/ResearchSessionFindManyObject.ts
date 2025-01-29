// Validators
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
// Types
import { ResearchSessionIncludeObject } from './ResearchSessionIncludeObject';
import { ResearchSessionSelectObject } from './ResearchSessionSelectObject';
import { ResearchSessionWhereObject } from './ResearchSessionWhereObject';
import { ResearchSessionOrderByObject } from './ResearchSessionOrderByObject';

export class ResearchSessionFindManyObject {
  @Type(() => ResearchSessionWhereObject)
  @IsOptional()
  where?: ResearchSessionWhereObject;

  @Type(() => ResearchSessionIncludeObject)
  @IsOptional()
  include?: ResearchSessionIncludeObject;

  @Type(() => ResearchSessionSelectObject)
  @IsOptional()
  select?: ResearchSessionSelectObject;

  @ValidateNested()
  @Type(() => ResearchSessionOrderByObject)
  @IsOptional()
  orderBy?: ResearchSessionOrderByObject[];
}
