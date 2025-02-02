// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ActivityDayIncludeObject } from './ActivityDayIncludeObject';
import { ActivityDaySelectObject } from './ActivityDaySelectObject';
import { ActivityDayWhereUniqueObject } from './ActivityDayWhereUniqueObject';

export class ActivityDayFindUniqueObject {
  @Type(() => ActivityDayWhereUniqueObject)
  where: ActivityDayWhereUniqueObject;

  @Type(() => ActivityDayIncludeObject)
  @IsOptional()
  include?: ActivityDayIncludeObject;

  @Type(() => ActivityDaySelectObject)
  @IsOptional()
  select?: ActivityDaySelectObject;
}
