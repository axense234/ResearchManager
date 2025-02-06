// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { UserIncludeObject } from './UserIncludeObject';
import { UserWhereUniqueObject } from './UserWhereUniqueObject';
import { UserSelectObject } from './UserSelectObject';

export class UserFindUniqueObject {
  @Type(() => UserWhereUniqueObject)
  where: UserWhereUniqueObject;

  @Type(() => UserIncludeObject)
  @IsOptional()
  include?: UserIncludeObject;

  @Type(() => UserSelectObject)
  @IsOptional()
  select?: UserSelectObject;
}
