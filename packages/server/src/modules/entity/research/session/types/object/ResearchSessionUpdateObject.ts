// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ResearchSessionIncludeObject } from './ResearchSessionIncludeObject';
import { ResearchSessionSelectObject } from './ResearchSessionSelectObject';
import { ResearchSessionUpdateDataObject } from './ResearchSessionUpdateDataObject';
import { ResearchSessionWhereUniqueObject } from './ResearchSessionWhereUniqueObject';

export class ResearchSessionUpdateObject {
  @Type(() => ResearchSessionWhereUniqueObject)
  where: ResearchSessionWhereUniqueObject;

  @Type(() => ResearchSessionUpdateDataObject)
  data: ResearchSessionUpdateDataObject;

  @Type(() => ResearchSessionIncludeObject)
  @IsOptional()
  include?: ResearchSessionIncludeObject;

  @Type(() => ResearchSessionSelectObject)
  @IsOptional()
  select?: ResearchSessionSelectObject;
}
