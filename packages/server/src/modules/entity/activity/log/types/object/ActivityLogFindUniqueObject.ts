// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ActivityLogIncludeObject } from './ActivityLogIncludeObject';
import { ActivityLogSelectObject } from './ActivityLogSelectObject';
import { ActivityLogWhereUniqueObject } from './ActivityLogWhereUniqueObject';

export class ActivityLogFindUniqueObject {
  @Type(() => ActivityLogWhereUniqueObject)
  where: ActivityLogWhereUniqueObject;

  @Type(() => ActivityLogIncludeObject)
  @IsOptional()
  include?: ActivityLogIncludeObject;

  @Type(() => ActivityLogSelectObject)
  @IsOptional()
  select?: ActivityLogSelectObject;
}
