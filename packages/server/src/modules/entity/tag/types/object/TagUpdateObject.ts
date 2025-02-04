// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { TagIncludeObject } from './TagIncludeObject';
import { TagSelectObject } from './TagSelectObject';
import { TagUpdateDataObject } from './TagUpdateDataObject';
import { TagWhereUniqueObject } from './TagWhereUniqueObject';

export class TagUpdateObject {
  @Type(() => TagWhereUniqueObject)
  where: TagWhereUniqueObject;

  @Type(() => TagUpdateDataObject)
  data: TagUpdateDataObject;

  @Type(() => TagIncludeObject)
  @IsOptional()
  include?: TagIncludeObject;

  @Type(() => TagSelectObject)
  @IsOptional()
  select?: TagSelectObject;
}
