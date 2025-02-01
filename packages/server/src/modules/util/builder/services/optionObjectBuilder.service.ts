// NestJS
import { Injectable } from '@nestjs/common';
// Types
import {
  EntityType,
  OptionObjectBuilderAllowedOptionValuesReturnObject,
  OptionObjectBuilderIncludeObject,
  OptionObjectBuilderParams,
  OptionObjectBuilderReturnObject,
  OptionObjectBuilderSelectObject,
} from '../types';
// Allowed Option Values
import { researchActivityAllowedIncludeValues } from 'src/modules/entity/research/activity/data/options/allowedIncludeValues';
import { researchActivityAllowedSelectValues } from 'src/modules/entity/research/activity/data/options/allowedSelectValues';
import { researchLogAllowedIncludeValues } from 'src/modules/entity/research/log/data/options/allowedIncludeValues';
import { researchLogAllowedSelectValues } from 'src/modules/entity/research/log/data/options/allowedSelectValues';
import { researchPhaseAllowedIncludeValues } from 'src/modules/entity/research/phase/data/options/allowedIncludeValues';
import { researchPhaseAllowedSelectValues } from 'src/modules/entity/research/phase/data/options/allowedSelectValues';
import { researchSessionAllowedIncludeValues } from 'src/modules/entity/research/session/data/options/allowedIncludeValues';
import { researchSessionAllowedSelectValues } from 'src/modules/entity/research/session/data/options/allowedSelectValues';
import { settingsAllowedIncludeValues } from 'src/modules/entity/settings/data/options/allowedIncludeValues';
import { settingsAllowedSelectValues } from 'src/modules/entity/settings/data/options/allowedSelectValues';
import { activityFeedAllowedIncludeValues } from 'src/modules/entity/activity/feed/data/options/allowedIncludeValues';
import { activityFeedAllowedSelectValues } from 'src/modules/entity/activity/feed/data/options/allowedSelectValues';

@Injectable()
export class OptionObjectBuilderService {
  constructor() {}

  chooseAllowedOptionValues(
    entityType: EntityType,
  ): OptionObjectBuilderAllowedOptionValuesReturnObject {
    let allowedIncludeValues: string[] = [];
    let allowedSelectValues: string[] = [];

    switch (entityType) {
      case 'researchActivity':
        allowedIncludeValues = researchActivityAllowedIncludeValues;
        allowedSelectValues = researchActivityAllowedSelectValues;
        break;
      case 'researchPhase':
        allowedIncludeValues = researchPhaseAllowedIncludeValues;
        allowedSelectValues = researchPhaseAllowedSelectValues;
        break;
      case 'researchSession':
        allowedIncludeValues = researchSessionAllowedIncludeValues;
        allowedSelectValues = researchSessionAllowedSelectValues;
        break;
      case 'researchLog':
        allowedIncludeValues = researchLogAllowedIncludeValues;
        allowedSelectValues = researchLogAllowedSelectValues;
        break;
      case 'settings':
        allowedIncludeValues = settingsAllowedIncludeValues;
        allowedSelectValues = settingsAllowedSelectValues;
        break;
      case 'activityFeed':
        allowedIncludeValues = activityFeedAllowedIncludeValues;
        allowedSelectValues = activityFeedAllowedSelectValues;
        break;
      default:
        break;
    }

    return { allowedIncludeValues, allowedSelectValues };
  }

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
      this.chooseAllowedOptionValues(entityType);

    switch (chosenOptionType) {
      case 'include':
        if (includeValues) {
          const includeValuesArray = includeValues
            .replace(/\s+/g, '')
            .split(',');

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
