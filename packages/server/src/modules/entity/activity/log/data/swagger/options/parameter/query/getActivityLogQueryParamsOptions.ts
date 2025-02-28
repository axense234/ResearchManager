// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  activityLogAllowedIncludeValues,
  activityLogAllowedSelectValues,
} from '../../../../options';

type GetActivityLogQueryParamsApiPropertyOptionsType = {
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const getActivityLogQueryParamsApiPropertyOptions: GetActivityLogQueryParamsApiPropertyOptionsType =
  {
    includeValues: {
      required: false,
      description: buildOptionDescription(
        'include',
        activityLogAllowedIncludeValues,
      ),
    },
    selectValues: {
      required: false,
      description: buildOptionDescription(
        'select',
        activityLogAllowedSelectValues,
      ),
    },
    chosenOptionType: {
      required: false,
      description:
        'The chosen option type you want to use. Available options: include, select. Note: the chosen option type has to match with either includeValues or selectValues.',
    },
  };
