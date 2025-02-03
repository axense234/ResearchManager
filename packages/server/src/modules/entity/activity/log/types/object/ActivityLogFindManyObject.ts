// Validators
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
// Types
import { ActivityLogIncludeObject } from './ActivityLogIncludeObject';
import { ActivityLogSelectObject } from './ActivityLogSelectObject';
import { ActivityLogWhereObject } from './ActivityLogWhereObject';
import { ActivityLogOrderByObject } from './ActivityLogOrderByObject';

export class ActivityLogFindManyObject {
  @Type(() => ActivityLogWhereObject)
  @IsOptional()
  where?: ActivityLogWhereObject;

  @Type(() => ActivityLogIncludeObject)
  @IsOptional()
  include?: ActivityLogIncludeObject;

  @Type(() => ActivityLogSelectObject)
  @IsOptional()
  select?: ActivityLogSelectObject;

  @ValidateNested()
  @Type(() => ActivityLogOrderByObject)
  @IsOptional()
  orderBy?: ActivityLogOrderByObject[];
}
