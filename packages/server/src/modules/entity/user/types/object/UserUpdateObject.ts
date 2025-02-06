// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { UserIncludeObject } from './UserIncludeObject';
import { UserSelectObject } from './UserSelectObject';
import { UserWhereUniqueObject } from './UserWhereUniqueObject';
import { UserUpdateDataObject } from './UserUpdateDataObject';

export class UserUpdateObject {
  @Type(() => UserWhereUniqueObject)
  where: UserWhereUniqueObject;

  @Type(() => UserUpdateDataObject)
  data: UserUpdateDataObject;

  @Type(() => UserIncludeObject)
  @IsOptional()
  include?: UserIncludeObject;

  @Type(() => UserSelectObject)
  @IsOptional()
  select?: UserSelectObject;
}
