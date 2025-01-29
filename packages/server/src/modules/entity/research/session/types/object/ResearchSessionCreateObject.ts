// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ResearchSessionSelectObject } from './ResearchSessionSelectObject';
import { ResearchSessionIncludeObject } from './ResearchSessionIncludeObject';
import { ResearchSessionCreateDataObject } from './ResearchSessionCreateDataObject';

export class ResearchSessionCreateObject {
  @Type(() => ResearchSessionCreateDataObject)
  data: ResearchSessionCreateDataObject;

  @Type(() => ResearchSessionIncludeObject)
  @IsOptional()
  include?: ResearchSessionIncludeObject;

  @Type(() => ResearchSessionSelectObject)
  @IsOptional()
  select?: ResearchSessionSelectObject;
}
