// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Data
import { userAllowedIncludeValues } from 'src/modules/entity/user/data/options/allowedIncludeValues';
import { userAllowedSelectValues } from 'src/modules/entity/user/data/options/allowedSelectValues';
// Util Function
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';

type SignInQueryParamsApiPropertyOptionsType = {
  includeValues: ApiPropertyOptions;
  includeDepth: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const signInQueryParamsApiPropertyOptions: SignInQueryParamsApiPropertyOptionsType =
  {
    includeValues: {
      required: false,
      description: buildOptionDescription('include', userAllowedIncludeValues),
    },
    includeDepth: {
      required: false,
      description:
        'The depth of the include object. Experimental. Available options: between 1-4, 1 being the default.',
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
  };
