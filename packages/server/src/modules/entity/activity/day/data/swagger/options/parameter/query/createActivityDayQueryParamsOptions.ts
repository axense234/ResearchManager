// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  activityDayAllowedIncludeValues,
  activityDayAllowedSelectValues,
} from '../../../../options';

type CreateActivityDayQueryParamsApiPropertyOptionsType = {
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
  createActivityLog: ApiPropertyOptions;
  createActivityLogDto: ApiPropertyOptions;
};

export const createActivityDayQueryParamsApiPropertyOptions: CreateActivityDayQueryParamsApiPropertyOptionsType =
  {
    includeValues: {
      required: false,
      description: buildOptionDescription(
        'include',
        activityDayAllowedIncludeValues,
      ),
    },
    selectValues: {
      required: false,
      description: buildOptionDescription(
        'select',
        activityDayAllowedSelectValues,
      ),
    },
    chosenOptionType: {
      required: false,
      description:
        'The chosen option type you want to use. Available options: include, select. Note: the chosen option type has to match with either includeValues or selectValues.',
      enum: ['include', 'select'],
    },
    createActivityLog: {
      required: false,
      description:
        'The query param capable of controlling the behaviour of creating a default Activity Log when an Activity Day is created. By default its set to false, thus NOT creating and connecting an Activity Log to am Activity Day when created. If the desired behaviour is to create an Activity Log and connect it to an Activity Day, set this query param to true AND, very IMPORTANTLY, provide the dto of the activity log you want to create in the createActivityLogDto query param.',
      enum: ['false', 'true'],
    },
    createActivityLogDto: {
      required: false,
      description:
        'The query param which represents the dto of the wanted to be created activity log. Has to be passed along the createActivityLog query param which has to be set to true.',
    },
  };
