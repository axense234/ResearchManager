// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';
// Data
import { userAllowedIncludeValues } from 'src/modules/entity/user/data/options/allowedIncludeValues';
import { userAllowedSelectValues } from 'src/modules/entity/user/data/options/allowedSelectValues';
// Util Func
import { buildOptionDescription } from 'src/util/func/buildOptionDescription';

type SignUpQueryParamsApiPropertyOptionsType = {
  includeValues: ApiPropertyOptions;
  selectValues: ApiPropertyOptions;
  chosenOptionType: ApiPropertyOptions;
  createSettings: ApiPropertyOptions;
  createActivityFeed: ApiPropertyOptions;
  createDefaultTags: ApiPropertyOptions;
};

export const signUpQueryParamsApiPropertyOptions: SignUpQueryParamsApiPropertyOptionsType =
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
    createSettings: {
      required: false,
      description:
        'The query param capable of controlling the behaviour of automatically creating default Settings when an User is created. By default its set to true, thus creating and connecting Settings when an User is created. If the desired behaviour is to NOT create Settings and connect them to an User, set this query param to false.',
      enum: ['false', 'true'],
    },
    createActivityFeed: {
      required: false,
      description:
        'The query param capable of controlling the behaviour of automatically creating an default Activity Feed when an User is created. By default its set to true, thus creating and connecting an Activity Feed to an User when created. If the desired behaviour is to NOT create an Activity Feed and connect them to an User, set this query param to false.',
      enum: ['false', 'true'],
    },
    createDefaultTags: {
      required: false,
      description:
        'The query param capable of controlling the behaviour of automatically creating some default Tags when an User is created. By default its set to true, thus creating and connecting some default Tags to an User when created. If the desired behaviour is to NOT create said default Tags and connect them to an User, set this query param to false.',
      enum: ['false', 'true'],
    },
  };
