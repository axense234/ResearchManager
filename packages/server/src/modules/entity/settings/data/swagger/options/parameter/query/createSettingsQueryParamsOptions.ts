// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  settingsAllowedIncludeValues,
  settingsAllowedSelectValues,
} from '../../../../options';

type CreateSettingsQueryParamsApiPropertyOptionsType = {
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const createSettingsQueryParamsApiPropertyOptions: CreateSettingsQueryParamsApiPropertyOptionsType =
  {
    includeValues: {
      required: false,
      description: buildOptionDescription(
        'include',
        settingsAllowedIncludeValues,
      ),
    },
    selectValues: {
      required: false,
      description: buildOptionDescription(
        'select',
        settingsAllowedSelectValues,
      ),
    },
    chosenOptionType: {
      required: false,
      description:
        'The chosen option type you want to use. Available options: include, select. Note: the chosen option type has to match with either includeValues or selectValues.',
    },
  };
