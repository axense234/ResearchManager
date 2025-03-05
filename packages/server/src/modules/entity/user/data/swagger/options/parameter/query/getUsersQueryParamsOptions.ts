// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  userAllowedIncludeValues,
  userAllowedSelectValues,
  userAllowedSortByKeysValues,
  usersAllowedSearchByKeyValues,
} from '../../../../options';

type GetUsersQueryParamsApiPropertyOptionsType = {
  searchByKey: ApiPropertyOptions;
  searchByValue: ApiPropertyOptions;
  sortByKeys: ApiPropertyOptions;
  sortByOrders: ApiPropertyOptions;
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const getUsersQueryParamsApiPropertyOptions: GetUsersQueryParamsApiPropertyOptionsType =
  {
    includeValues: {
      required: false,
      description: buildOptionDescription('include', userAllowedIncludeValues),
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
    searchByKey: {
      required: false,
      description: buildOptionDescription(
        'search by key',
        usersAllowedSearchByKeyValues,
      ),
      enum: usersAllowedSearchByKeyValues,
    },
    searchByValue: {
      required: false,
      description: 'The value of the coresponding search by key.',
    },
    sortByKeys: {
      required: false,
      description: buildOptionDescription(
        'sort by keys',
        userAllowedSortByKeysValues,
      ),
    },
    sortByOrders: {
      required: false,
      description:
        'The CSV order by values of the coresponding sort by keys. They should be in order(no pun intended) so they can match the order of the sort by keys.',
    },
  };
