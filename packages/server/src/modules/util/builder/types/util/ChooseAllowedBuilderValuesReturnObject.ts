// Validators
import { IsArray } from 'class-validator';
// Types
import {
  AllowedIncludeValue,
  DataObjectBuilderAllowedConnectValue,
} from '../data';

export class ChooseAllowedBuilderValuesReturnObject {
  @IsArray()
  allowedIncludeValues: AllowedIncludeValue[];

  @IsArray()
  allowedSelectValues: string[];

  @IsArray()
  allowedSortByKeysValues: string[];

  @IsArray()
  allowedSearchByKeyValues: string[];

  @IsArray()
  allowedConnectValues: DataObjectBuilderAllowedConnectValue[];
}
