// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  researchSessionAllowedIncludeValues,
  researchSessionAllowedSelectValues,
  researchSessionAllowedSortByKeysValues,
  researchSessionsAllowedSearchByKeyValues,
} from '../../../../options';

type GetResearchSessionsQueryParamsApiPropertyOptionsType = {
  researchPhaseId: ApiPropertyOptions;
  searchByKey: ApiPropertyOptions;
  searchByValue: ApiPropertyOptions;
  sortByKeys: ApiPropertyOptions;
  sortByOrders: ApiPropertyOptions;
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const getResearchSessionsQueryParamsApiPropertyOptions: GetResearchSessionsQueryParamsApiPropertyOptionsType =
  {
    researchPhaseId: {
      required: false,
      description:
        'The researchPhaseId used for matching all the Research Sessions that have that researchPhaseId.',
    },
    includeValues: {
      required: false,
      description: buildOptionDescription(
        'include',
        researchSessionAllowedIncludeValues,
      ),
    },
    selectValues: {
      required: false,
      description: buildOptionDescription(
        'select',
        researchSessionAllowedSelectValues,
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
        researchSessionsAllowedSearchByKeyValues,
      ),
      enum: researchSessionsAllowedSearchByKeyValues,
    },
    searchByValue: {
      required: false,
      description: 'The value of the coresponding search by key.',
    },
    sortByKeys: {
      required: false,
      description: buildOptionDescription(
        'sort by keys',
        researchSessionAllowedSortByKeysValues,
      ),
    },
    sortByOrders: {
      required: false,
      description:
        'The CSV order by values of the coresponding sort by keys. They should be in order(no pun intended) so they can match the order of the sort by keys.',
    },
  };
