// Validators
import { IsOptional, IsString } from 'class-validator';
// Types
import { OptionObjectBuilderIncludeObject } from './OptionObjectBuilderIncludeObject';
import { OptionObjectBuilderSelectObject } from './OptionObjectBuilderSelectObject';

export class OptionObjectBuilderReturnObject {
  @IsString()
  @IsOptional()
  additionalNotes?: string;

  optionObject?:
    | OptionObjectBuilderIncludeObject
    | OptionObjectBuilderSelectObject;
}
