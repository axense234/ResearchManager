// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  tagAllowedIncludeValues,
  tagAllowedSelectValues,
} from '../../../../options';

type DeleteTagQueryParamsApiPropertyOptionsType = {
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const deleteTagQueryParamsApiPropertyOptions: DeleteTagQueryParamsApiPropertyOptionsType =
  {
    includeValues: {
      required: false,
      description: buildOptionDescription('include', tagAllowedIncludeValues),
    },
    selectValues: {
      required: false,
      description: buildOptionDescription('select', tagAllowedSelectValues),
    },
    chosenOptionType: {
      required: false,
      description:
        'The chosen option type you want to use. Available options: include, select. Note: the chosen option type has to match with either includeValues or selectValues.',
    },
  };
