// Validators
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
// Types
import { ActivityDayIncludeObject } from './ActivityDayIncludeObject';
import { ActivityDaySelectObject } from './ActivityDaySelectObject';
import { ActivityDayWhereObject } from './ActivityDayWhereObject';
import { ActivityDayOrderByObject } from './ActivityDayOrderByObject';

export class ActivityDayFindManyObject {
  @Type(() => ActivityDayWhereObject)
  @IsOptional()
  where?: ActivityDayWhereObject;

  @Type(() => ActivityDayIncludeObject)
  @IsOptional()
  include?: ActivityDayIncludeObject;

  @Type(() => ActivityDaySelectObject)
  @IsOptional()
  select?: ActivityDaySelectObject;

  @ValidateNested()
  @Type(() => ActivityDayOrderByObject)
  @IsOptional()
  orderBy?: ActivityDayOrderByObject[];
}
