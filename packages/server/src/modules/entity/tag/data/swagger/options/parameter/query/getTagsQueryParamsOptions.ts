// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  tagAllowedIncludeValues,
  tagAllowedSelectValues,
  tagAllowedSortByKeysValues,
  tagsAllowedSearchByKeyValues,
} from '../../../../options';

type GetTagsQueryParamsApiPropertyOptionsType = {
  userId: ApiPropertyOptions;
  searchByKey: ApiPropertyOptions;
  searchByValue: ApiPropertyOptions;
  sortByKeys: ApiPropertyOptions;
  sortByOrders: ApiPropertyOptions;
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
};

export const getTagsQueryParamsApiPropertyOptions: GetTagsQueryParamsApiPropertyOptionsType =
  {
    userId: {
      required: false,
      description:
        'The userId used for matching all the Tags that have that userId.',
    },
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
      enum: ['include', 'select'],
    },
    searchByKey: {
      required: false,
      description: buildOptionDescription(
        'search by key',
        tagsAllowedSearchByKeyValues,
      ),
      enum: tagsAllowedSearchByKeyValues,
    },
    searchByValue: {
      required: false,
      description: 'The value of the coresponding search by key.',
    },
    sortByKeys: {
      required: false,
      description: buildOptionDescription(
        'sort by keys',
        tagAllowedSortByKeysValues,
      ),
    },
    sortByOrders: {
      required: false,
      description:
        'The CSV order by values of the coresponding sort by keys, composed of "asc" for ascending and "desc" for descending orders. They should be in order(no pun intended) so they can match the order of the sort by keys.',
    },
  };
