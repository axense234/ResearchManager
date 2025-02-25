// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  researchPhaseAllowedIncludeValues,
  researchPhaseAllowedSelectValues,
  researchPhaseAllowedSortByKeysValues,
  researchPhasesAllowedSearchByKeyValues,
} from '../../../../options';

type GetResearchPhasesQueryParamsApiPropertyOptionsType = {
  researchActivityId: ApiPropertyOptions;
  searchByKey: ApiPropertyOptions;
  searchByValue: ApiPropertyOptions;
  sortByKeys: ApiPropertyOptions;
  sortByOrders: ApiPropertyOptions;
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const getResearchPhasesQueryParamsApiPropertyOptions: GetResearchPhasesQueryParamsApiPropertyOptionsType =
  {
    researchActivityId: {
      required: false,
      description:
        'The researchActivityId used for matching all the Research Phases that have that researchActivityId.',
    },
    includeValues: {
      required: false,
      description: buildOptionDescription(
        'include',
        researchPhaseAllowedIncludeValues,
      ),
    },
    selectValues: {
      required: false,
      description: buildOptionDescription(
        'select',
        researchPhaseAllowedSelectValues,
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
        researchPhasesAllowedSearchByKeyValues,
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
        researchPhaseAllowedSortByKeysValues,
      ),
    },
    sortByOrders: {
      required: false,
      description:
        'The CSV order by values of the coresponding sort by keys. They should be in order(no pun intended) so they can match the order of the sort by keys.',
    },
  };
