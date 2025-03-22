// Validators
import { IsArray } from 'class-validator';
// Types
import { DataObjectBuilderAllowedConnectValue } from '../data';
import { EntityType } from '../general';
import { EntityTypePlural } from '@researchmanager/shared/types';

export class ChooseAllowedBuilderValuesReturnObject {
  @IsArray()
  allowedIncludeValues: (EntityType | EntityTypePlural)[];

  @IsArray()
  allowedSelectValues: string[];

  @IsArray()
  allowedSortByKeysValues: string[];

  @IsArray()
  allowedSearchByKeyValues: string[];

  @IsArray()
  allowedConnectValues: DataObjectBuilderAllowedConnectValue[];
}
