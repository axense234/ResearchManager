// Validators
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
// Types
import { TagCreateDataObject } from './TagCreateDataObject';
import { TagIncludeObject } from './TagIncludeObject';
import { TagSelectObject } from './TagSelectObject';

export class TagCreateObject {
  @Type(() => TagCreateDataObject)
  data: TagCreateDataObject;

  @Type(() => TagIncludeObject)
  @IsOptional()
  include?: TagIncludeObject;

  @Type(() => TagSelectObject)
  @IsOptional()
  select?: TagSelectObject;
}
