// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { getResearchActivityResponsesExamples } from '../../../examples';

type GetResearchActivityResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getResearchActivityResponsesOptions: GetResearchActivityResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully fetched Research Activity by ID.',
      example: getResearchActivityResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: getResearchActivityResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getResearchActivityResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Research Activity with the given data.',
      example: getResearchActivityResponsesExamples['404'],
    },
  };
