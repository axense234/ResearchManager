// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import { getResearchActivitiesResponsesExamples } from '../../../examples';

type GetResearchActivitiesResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getResearchActivitiesResponsesOptions: GetResearchActivitiesResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully fetched Research Activities.',
      example: getResearchActivitiesResponsesExamples['200'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getResearchActivitiesResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Research Activities given the query params.',
      example: getResearchActivitiesResponsesExamples['404'],
    },
  };
