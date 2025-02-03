// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ActivityLogIncludeObject } from './ActivityLogIncludeObject';
import { ActivityLogSelectObject } from './ActivityLogSelectObject';
import { ActivityLogUpdateDataObject } from './ActivityLogUpdateDataObject';
import { ActivityLogWhereUniqueObject } from './ActivityLogWhereUniqueObject';

export class ActivityLogUpdateObject {
  @Type(() => ActivityLogWhereUniqueObject)
  where: ActivityLogWhereUniqueObject;

  @Type(() => ActivityLogUpdateDataObject)
  data: ActivityLogUpdateDataObject;

  @Type(() => ActivityLogIncludeObject)
  @IsOptional()
  include?: ActivityLogIncludeObject;

  @Type(() => ActivityLogSelectObject)
  @IsOptional()
  select?: ActivityLogSelectObject;
}
