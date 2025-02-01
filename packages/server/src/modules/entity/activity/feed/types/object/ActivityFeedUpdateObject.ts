// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { ActivityFeedIncludeObject } from './ActivityFeedIncludeObject';
import { ActivityFeedSelectObject } from './ActivityFeedSelectObject';
import { ActivityFeedUpdateDataObject } from './ActivityFeedUpdateDataObject';
import { ActivityFeedWhereUniqueObject } from './ActivityFeedWhereUniqueObject';

export class ActivityFeedUpdateObject {
  @Type(() => ActivityFeedWhereUniqueObject)
  where: ActivityFeedWhereUniqueObject;

  @Type(() => ActivityFeedUpdateDataObject)
  data: ActivityFeedUpdateDataObject;

  @Type(() => ActivityFeedIncludeObject)
  @IsOptional()
  include?: ActivityFeedIncludeObject;

  @Type(() => ActivityFeedSelectObject)
  @IsOptional()
  select?: ActivityFeedSelectObject;
}
