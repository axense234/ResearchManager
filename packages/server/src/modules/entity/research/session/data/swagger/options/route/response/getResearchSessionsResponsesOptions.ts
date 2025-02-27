// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { getResearchSessionsResponsesExamples } from '../../../examples';

type GetResearchSessionsResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getResearchSessionsResponsesOptions: GetResearchSessionsResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully fetched Research Sessions.',
      example: getResearchSessionsResponsesExamples['200'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getResearchSessionsResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Research Sessions given the query params.',
      example: getResearchSessionsResponsesExamples['404'],
    },
  };
