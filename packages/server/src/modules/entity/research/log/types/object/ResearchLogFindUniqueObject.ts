// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ResearchLogIncludeObject } from './ResearchLogIncludeObject';
import { ResearchLogSelectObject } from './ResearchLogSelectObject';
import { ResearchLogWhereUniqueObject } from './ResearchLogWhereUniqueObject';

export class ResearchLogFindUniqueObject {
  @Type(() => ResearchLogWhereUniqueObject)
  where: ResearchLogWhereUniqueObject;

  @Type(() => ResearchLogIncludeObject)
  @IsOptional()
  include?: ResearchLogIncludeObject;

  @Type(() => ResearchLogSelectObject)
  @IsOptional()
  select?: ResearchLogSelectObject;
}
