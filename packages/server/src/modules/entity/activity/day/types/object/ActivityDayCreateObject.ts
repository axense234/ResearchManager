// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ActivityDayCreateDataObject } from './ActivityDayCreateDataObject';
import { ActivityDayIncludeObject } from './ActivityDayIncludeObject';
import { ActivityDaySelectObject } from './ActivityDaySelectObject';

export class ActivityDayCreateObject {
  @Type(() => ActivityDayCreateDataObject)
  data: ActivityDayCreateDataObject;

  @Type(() => ActivityDayIncludeObject)
  @IsOptional()
  include?: ActivityDayIncludeObject;

  @Type(() => ActivityDaySelectObject)
  @IsOptional()
  select?: ActivityDaySelectObject;
}
