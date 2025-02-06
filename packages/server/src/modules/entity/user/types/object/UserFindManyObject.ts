// Validators
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
// Types
import { UserIncludeObject } from './UserIncludeObject';
import { UserSelectObject } from './UserSelectObject';
import { UserWhereObject } from './UserWhereObject';
import { UserOrderByObject } from './UserOrderByObject';

export class UserFindManyObject {
  @Type(() => UserWhereObject)
  @IsOptional()
  where?: UserWhereObject;

  @Type(() => UserIncludeObject)
  @IsOptional()
  include?: UserIncludeObject;

  @Type(() => UserSelectObject)
  @IsOptional()
  select?: UserSelectObject;

  @ValidateNested()
  @Type(() => UserOrderByObject)
  @IsOptional()
  orderBy?: UserOrderByObject[];
}
