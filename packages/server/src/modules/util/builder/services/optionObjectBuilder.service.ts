// NestJS
import { Injectable } from '@nestjs/common';
// Types
import {
  OptionObjectBuilderIncludeObject,
  OptionObjectBuilderParams,
  OptionObjectBuilderReturnObject,
  OptionObjectBuilderSelectObject,
} from '../types';
// Util Service
import { ChooseAllowedBuilderValuesService } from './chooseAllowedBuilderValues.service';
import { EntityType } from '@researchmanager/shared/types';

@Injectable()
export class OptionObjectBuilderService {
  constructor(
    private chooseAllowedBuilderValuesService: ChooseAllowedBuilderValuesService,
  ) {}

  buildOptionObject({
    entityType,
    chosenOptionType,
    includeValues,
    selectValues,
  }: OptionObjectBuilderParams) {
    const includeObject: OptionObjectBuilderIncludeObject = {};
    const selectObject: OptionObjectBuilderSelectObject = {};
    const builtOptionObjectReturnObject: OptionObjectBuilderReturnObject = {};

    const { allowedIncludeValues, allowedSelectValues } =
      this.chooseAllowedBuilderValuesService.chooseAllowedBuilderValues(
        entityType,
      );

    switch (chosenOptionType) {
      case 'include':
        if (includeValues) {
          const includeValuesArray = includeValues
            .replace(/\s+/g, '')
            .split(',') as EntityType[];

          const filteredIncludeValuesArray = includeValuesArray.filter(
            (includeValue) => allowedIncludeValues.includes(includeValue),
          );

          filteredIncludeValuesArray.forEach((includeValue) => {
            includeObject[includeValue] = true;
          });

          builtOptionObjectReturnObject.optionObject = includeObject;
        } else {
          builtOptionObjectReturnObject.additionalNotes = `No includeValues were provided even tho chosenOptionType is given and equal to 'include'.`;
        }
        break;
      case 'select':
        if (selectValues) {
          const selectValuesArray = selectValues.replace(/\s+/g, '').split(',');

          const filteredSelectValuesArray = selectValuesArray.filter(
            (selectValue) => allowedSelectValues.includes(selectValue),
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
