import { IsArray } from 'class-validator';

export class OptionObjectBuilderAllowedOptionValuesReturnObject {
  @IsArray()
  allowedIncludeValues: string[];

  @IsArray()
  allowedSelectValues: string[];
}
