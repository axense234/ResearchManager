// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  researchActivitiesAllowedSearchByKeyValues,
  researchActivitiesAllowedSortByKeysValues,
  researchActivityAllowedIncludeValues,
  researchActivityAllowedSelectValues,
} from '../../../../options';

type GetResearchActivitiesQueryParamsApiPropertyOptionsType = {
  userId: ApiPropertyOptions;
  searchByKey: ApiPropertyOptions;
  searchByValue: ApiPropertyOptions;
  sortByKeys: ApiPropertyOptions;
  sortByOrders: ApiPropertyOptions;
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const getResearchActivitiesQueryParamsApiPropertyOptions: GetResearchActivitiesQueryParamsApiPropertyOptionsType =
  {
    userId: {
      required: false,
      description:
        'The userId used for matching all the Research Activities that have that userId.',
    },
    includeValues: {
      required: false,
      description: buildOptionDescription(
        'include',
        researchActivityAllowedIncludeValues,
      ),
    },
    selectValues: {
      required: false,
      description: buildOptionDescription(
        'select',
        researchActivityAllowedSelectValues,
      ),
    },
    chosenOptionType: {
      required: false,
      description:
        'The chosen option type you want to use. Available options: include, select. Note: the chosen option type has to match with either includeValues or selectValues.',
      enum: ['include', 'select'],
    },
    searchByKey: {
      required: false,
      description: buildOptionDescription(
        'search by key',
        researchActivitiesAllowedSearchByKeyValues,
      ),
      enum: researchActivitiesAllowedSearchByKeyValues,
    },
    searchByValue: {
      required: false,
      description: 'The value of the coresponding search by key.',
    },
    sortByKeys: {
      required: false,
      description: buildOptionDescription(
        'sort by keys',
        researchActivitiesAllowedSortByKeysValues,
      ),
    },
    sortByOrders: {
      required: false,
      description:
        'The CSV order by values of the coresponding sort by keys, composed of "asc" for ascending and "desc" for descending orders. They should be in order(no pun intended) so they can match the order of the sort by keys.',
    },
  };
