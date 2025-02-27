// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  activityFeedAllowedIncludeValues,
  activityFeedAllowedSelectValues,
  activityFeedAllowedSortByKeysValues,
  activityFeedsAllowedSearchByKeyValues,
} from '../../../../options';

type GetActivityFeedsQueryParamsApiPropertyOptionsType = {
  userId: ApiPropertyOptions;
  researchActivityId: ApiPropertyOptions;
  searchByKey: ApiPropertyOptions;
  searchByValue: ApiPropertyOptions;
  sortByKeys: ApiPropertyOptions;
  sortByOrders: ApiPropertyOptions;
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const getActivityFeedsQueryParamsApiPropertyOptions: GetActivityFeedsQueryParamsApiPropertyOptionsType =
  {
    userId: {
      required: false,
      description:
        'The userId used for matching all the Activity Feeds that have that userId.',
    },
    researchActivityId: {
      required: false,
      description:
        'The researchActivityId used for matching all the Activity Feeds that have that researchActivityId.',
    },
    includeValues: {
      required: false,
      description: buildOptionDescription(
        'include',
        activityFeedAllowedIncludeValues,
      ),
    },
    selectValues: {
      required: false,
      description: buildOptionDescription(
        'select',
        activityFeedAllowedSelectValues,
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
        activityFeedsAllowedSearchByKeyValues,
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
        activityFeedAllowedSortByKeysValues,
      ),
    },
    sortByOrders: {
      required: false,
      description:
        'The CSV order by values of the coresponding sort by keys. They should be in order(no pun intended) so they can match the order of the sort by keys.',
    },
  };
