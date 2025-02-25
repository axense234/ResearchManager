// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { getResearchLogResponsesExamples } from '../../../examples';

type GetResearchLogResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getResearchLogResponsesOptions: GetResearchLogResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully fetched Research Log by ID.',
      example: getResearchLogResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: getResearchLogResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getResearchLogResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Research Log with the given data.',
      example: getResearchLogResponsesExamples['404'],
    },
  };
