// NestJS
import { Injectable } from '@nestjs/common';
// Types
import {
  OptionObjectBuilderIncludeObject,
  OptionObjectBuilderParams,
  OptionObjectBuilderReturnObject,
  OptionObjectBuilderSelectObject,
} from '../types';
import { EntityType, EntityTypePlural } from '@researchmanager/shared/types';
// Util Func
import { chooseAllowedBuilderValues } from 'src/util/func/chooseAllowedBuilderValues';
import { buildAllowedIncludeValuesObject } from 'src/util/func/buildAllowedIncludeValuesObject';
import { filterAllowedValues } from 'src/util/func/filterAllowedValues';
@Injectable()
export class OptionObjectBuilderService {
  constructor() {}

  buildOptionObject({
    entityType,
    chosenOptionType,
    selectValues,
    includeDepth,
    includeValues,
  }: OptionObjectBuilderParams) {
    const includeObject: OptionObjectBuilderIncludeObject = {};
    const selectObject: OptionObjectBuilderSelectObject = {};
    const builtOptionObjectReturnObject: OptionObjectBuilderReturnObject = {};

    const { allowedIncludeValues, allowedSelectValues } =
      chooseAllowedBuilderValues(entityType);

    switch (chosenOptionType) {
      case 'include':
        if (includeValues) {
          const includeValuesArray = includeValues
            .replace(/\s+/g, '')
            .split(',') as (EntityType | EntityTypePlural)[];

          const filteredIncludeValuesArray = filterAllowedValues(
            includeValuesArray,
            allowedIncludeValues,
          );

          const nestedIncludeObject = buildAllowedIncludeValuesObject(
            filteredIncludeValuesArray as (EntityType | EntityTypePlural)[],
            includeObject,
            includeDepth,
          );

          builtOptionObjectReturnObject.optionObject = nestedIncludeObject;
        } else {
          builtOptionObjectReturnObject.additionalNotes = `No includeValues were provided even tho chosenOptionType is given and equal to 'include'.`;
        }
        break;
      case 'select':
        if (selectValues) {
          const selectValuesArray = selectValues.replace(/\s+/g, '').split(',');

          const filteredSelectValuesArray = filterAllowedValues(
            selectValuesArray,
            allowedSelectValues,
          );

          filteredSelectValuesArray.forEach((selectValue) => {
            selectObject[selectValue] = true;
          });

          builtOptionObjectReturnObject.optionObject = selectObject;
        } else {
          builtOptionObjectReturnObject.additionalNotes = `No selectValues were provided even tho chosenOptionType is given and equal to 'select'.`;
        }

        break;
      default:
        if (includeValues || selectValues) {
          builtOptionObjectReturnObject.additionalNotes = `No chosenOptionType query parameter provided even tho includedValues / selectValues were given.`;
        }
        break;
    }

    return builtOptionObjectReturnObject;
  }
}
