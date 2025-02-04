// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { TagIncludeObject } from './TagIncludeObject';
import { TagSelectObject } from './TagSelectObject';
import { TagWhereUniqueObject } from './TagWhereUniqueObject';

export class TagFindUniqueObject {
  @Type(() => TagWhereUniqueObject)
  where: TagWhereUniqueObject;

  @Type(() => TagIncludeObject)
  @IsOptional()
  include?: TagIncludeObject;

  @Type(() => TagSelectObject)
  @IsOptional()
  select?: TagSelectObject;
}
