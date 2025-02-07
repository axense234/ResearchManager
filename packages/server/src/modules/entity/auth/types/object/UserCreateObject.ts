// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import {
  UserIncludeObject,
  UserSelectObject,
} from 'src/modules/entity/user/types';
import { UserCreateDataObject } from './UserCreateDataObject';

export class UserCreateObject {
  @Type(() => UserCreateDataObject)
  data: UserCreateDataObject;

  @Type(() => UserIncludeObject)
  @IsOptional()
  include?: UserIncludeObject;

  @Type(() => UserSelectObject)
  @IsOptional()
  select?: UserSelectObject;
}
