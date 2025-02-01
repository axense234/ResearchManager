// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ActivityFeedIncludeObject } from './ActivityFeedIncludeObject';
import { ActivityFeedSelectObject } from './ActivityFeedSelectObject';
import { ActivityFeedWhereUniqueObject } from './ActivityFeedWhereUniqueObject';

export class ActivityFeedFindUniqueObject {
  @Type(() => ActivityFeedWhereUniqueObject)
  where: ActivityFeedWhereUniqueObject;

  @Type(() => ActivityFeedIncludeObject)
  @IsOptional()
  include?: ActivityFeedIncludeObject;

  @Type(() => ActivityFeedSelectObject)
  @IsOptional()
  select?: ActivityFeedSelectObject;
}
