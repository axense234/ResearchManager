// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  userAllowedIncludeValues,
  userAllowedSelectValues,
} from '../../../../options';

type GetUserQueryParamsApiPropertyOptionsType = {
  uniqueIdentifierType: ApiPropertyOptions;
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const getUserQueryParamsApiPropertyOptions: GetUserQueryParamsApiPropertyOptionsType =
  {
    includeValues: {
      required: false,
      description: buildOptionDescription('include', userAllowedIncludeValues),
    },
    selectValues: {
      required: false,
      description: buildOptionDescription('select', userAllowedSelectValues),
    },
    chosenOptionType: {
      required: false,
      description:
        'The chosen option type you want to use. Available options: include, select. Note: the chosen option type has to match with either includeValues or selectValues.',
      enum: ['include', 'select'],
    },
    uniqueIdentifierType: {
      required: true,
      description:
        'The type of unique identifier provided. Available values: email or id.',
      enum: ['email', 'id'],
    },
  };
