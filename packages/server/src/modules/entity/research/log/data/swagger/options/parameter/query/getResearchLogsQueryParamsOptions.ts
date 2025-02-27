// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  researchLogAllowedIncludeValues,
  researchLogAllowedSelectValues,
  researchLogsAllowedSearchByKeyValues,
  researchLogsAllowedSortByKeysValues,
} from '../../../../options';

type GetResearchLogsQueryParamsApiPropertyOptionsType = {
  researchPhaseId: ApiPropertyOptions;
  searchByKey: ApiPropertyOptions;
  searchByValue: ApiPropertyOptions;
  sortByKeys: ApiPropertyOptions;
  sortByOrders: ApiPropertyOptions;
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const getResearchLogsQueryParamsApiPropertyOptions: GetResearchLogsQueryParamsApiPropertyOptionsType =
  {
    researchPhaseId: {
      required: false,
      description:
        'The researchPhaseId used for matching all the Research Logs that have that researchPhaseId.',
    },
    includeValues: {
      required: false,
      description: buildOptionDescription(
        'include',
        researchLogAllowedIncludeValues,
      ),
    },
    selectValues: {
      required: false,
      description: buildOptionDescription(
        'select',
        researchLogAllowedSelectValues,
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
        researchLogsAllowedSearchByKeyValues,
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
        researchLogsAllowedSortByKeysValues,
      ),
    },
    sortByOrders: {
      required: false,
      description:
        'The CSV order by values of the coresponding sort by keys. They should be in order(no pun intended) so they can match the order of the sort by keys.',
    },
  };
