// Validators
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
// Types
import { TagIncludeObject } from './TagIncludeObject';
import { TagSelectObject } from './TagSelectObject';
import { TagWhereObject } from './TagWhereObject';
import { TagOrderByObject } from './TagOrderByObject';

export class TagFindManyObject {
  @Type(() => TagWhereObject)
  @IsOptional()
  where?: TagWhereObject;

  @Type(() => TagIncludeObject)
  @IsOptional()
  include?: TagIncludeObject;

  @Type(() => TagSelectObject)
  @IsOptional()
  select?: TagSelectObject;

  @ValidateNested()
  @Type(() => TagOrderByObject)
  @IsOptional()
  orderBy?: TagOrderByObject[];
}
