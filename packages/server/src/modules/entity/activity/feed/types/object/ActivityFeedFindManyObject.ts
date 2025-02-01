// Validators
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
// Types
import { ActivityFeedIncludeObject } from './ActivityFeedIncludeObject';
import { ActivityFeedSelectObject } from './ActivityFeedSelectObject';
import { ActivityFeedWhereObject } from './ActivityFeedWhereObject';
import { ActivityFeedOrderByObject } from './ActivityFeedOrderByObject';

export class ActivityFeedFindManyObject {
  @Type(() => ActivityFeedWhereObject)
  @IsOptional()
  where?: ActivityFeedWhereObject;

  @Type(() => ActivityFeedIncludeObject)
  @IsOptional()
  include?: ActivityFeedIncludeObject;

  @Type(() => ActivityFeedSelectObject)
  @IsOptional()
  select?: ActivityFeedSelectObject;

  @ValidateNested()
  @Type(() => ActivityFeedOrderByObject)
  @IsOptional()
  orderBy?: ActivityFeedOrderByObject[];
}
