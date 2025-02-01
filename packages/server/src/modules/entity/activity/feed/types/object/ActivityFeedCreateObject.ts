// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ActivityFeedCreateDataObject } from './ActivityFeedCreateDataObject';
import { ActivityFeedIncludeObject } from './ActivityFeedIncludeObject';
import { ActivityFeedSelectObject } from './ActivityFeedSelectObject';

export class ActivityFeedCreateObject {
  @Type(() => ActivityFeedCreateDataObject)
  data: ActivityFeedCreateDataObject;

  @Type(() => ActivityFeedIncludeObject)
  @IsOptional()
  include?: ActivityFeedIncludeObject;

  @Type(() => ActivityFeedSelectObject)
  @IsOptional()
  select?: ActivityFeedSelectObject;
}
