// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ActivityLogCreateDataObject } from './ActivityLogCreateDataObject';
import { ActivityLogIncludeObject } from './ActivityLogIncludeObject';
import { ActivityLogSelectObject } from './ActivityLogSelectObject';

export class ActivityLogCreateObject {
  @Type(() => ActivityLogCreateDataObject)
  data: ActivityLogCreateDataObject;

  @Type(() => ActivityLogIncludeObject)
  @IsOptional()
  include?: ActivityLogIncludeObject;

  @Type(() => ActivityLogSelectObject)
  @IsOptional()
  select?: ActivityLogSelectObject;
}
