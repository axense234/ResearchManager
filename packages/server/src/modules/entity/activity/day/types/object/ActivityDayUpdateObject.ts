// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ActivityDayIncludeObject } from './ActivityDayIncludeObject';
import { ActivityDaySelectObject } from './ActivityDaySelectObject';
import { ActivityDayUpdateDataObject } from './ActivityDayUpdateDataObject';
import { ActivityDayWhereUniqueObject } from './ActivityDayWhereUniqueObject';

export class ActivityDayUpdateObject {
  @Type(() => ActivityDayWhereUniqueObject)
  where: ActivityDayWhereUniqueObject;

  @Type(() => ActivityDayUpdateDataObject)
  data: ActivityDayUpdateDataObject;

  @Type(() => ActivityDayIncludeObject)
  @IsOptional()
  include?: ActivityDayIncludeObject;

  @Type(() => ActivityDaySelectObject)
  @IsOptional()
  select?: ActivityDaySelectObject;
}
