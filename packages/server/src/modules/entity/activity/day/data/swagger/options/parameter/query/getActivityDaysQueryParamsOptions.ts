// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// DATA
import {
  activityDayAllowedIncludeValues,
  activityDayAllowedSelectValues,
  activityDayAllowedSortByKeysValues,
  activityDaysAllowedSearchByKeyValues,
} from '../../../../options';

type GetActivityDaysQueryParamsApiPropertyOptionsType = {
  activityFeedId: ApiPropertyOptions;
  searchByKey: ApiPropertyOptions;
  searchByValue: ApiPropertyOptions;
  sortByKeys: ApiPropertyOptions;
  sortByOrders: ApiPropertyOptions;
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const getActivityDaysQueryParamsApiPropertyOptions: GetActivityDaysQueryParamsApiPropertyOptionsType =
  {
    activityFeedId: {
      required: false,
      description:
        'The activityFeedId used for matching all the Activity Days that have that activityFeedId.',
    },
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
    },
    searchByKey: {
      required: false,
      description: buildOptionDescription(
        'search by key',
        activityDaysAllowedSearchByKeyValues,
      ),
    },
    searchByValue: {
      required: false,
      description: 'The value of the coresponding search by key.',
    },
    sortByKeys: {
      required: false,
      description: buildOptionDescription(
        'sort by keys',
        activityDayAllowedSortByKeysValues,
      ),
    },
    sortByOrders: {
      required: false,
      description:
        'The CSV order by values of the coresponding sort by keys. They should be in order(no pun intended) so they can match the order of the sort by keys.',
    },
  };
