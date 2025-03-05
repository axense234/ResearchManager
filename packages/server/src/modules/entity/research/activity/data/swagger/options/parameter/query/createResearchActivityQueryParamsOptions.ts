// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';
// Data
import {
  researchActivityAllowedIncludeValues,
  researchActivityAllowedSelectValues,
} from '../../../../options';

type CreateResearchActivityQueryParamsApiPropertyOptionsType = {
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
  createActivityFeed: ApiPropertyOptions;
};

export const createResearchActivityQueryParamsApiPropertyOptions: CreateResearchActivityQueryParamsApiPropertyOptionsType =
  {
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
    createActivityFeed: {
      required: false,
      description:
        'The query param capable of controlling the behaviour of automatically creating an default Activity Feed when a Research Activity is created. By default its set to true, thus creating and connecting an Activity Feed to a Research Activity when created. If the desired behaviour is to NOT create an Activity Feed and connect it to a Research Activity, set this query param to false.',
      enum: ['false', 'true'],
    },
  };
