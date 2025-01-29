// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ResearchSessionIncludeObject } from './ResearchSessionIncludeObject';
import { ResearchSessionSelectObject } from './ResearchSessionSelectObject';
import { ResearchSessionWhereUniqueObject } from './ResearchSessionWhereUniqueObject';

export class ResearchSessionFindUniqueObject {
  @Type(() => ResearchSessionWhereUniqueObject)
  where: ResearchSessionWhereUniqueObject;

  @Type(() => ResearchSessionIncludeObject)
  @IsOptional()
  include?: ResearchSessionIncludeObject;

  @Type(() => ResearchSessionSelectObject)
  @IsOptional()
  select?: ResearchSessionSelectObject;
}
