// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { getResearchSessionResponsesExamples } from '../../../examples';

type GetResearchSessionResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getResearchSessionResponsesOptions: GetResearchSessionResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully fetched Research Session by ID.',
      example: getResearchSessionResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: getResearchSessionResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getResearchSessionResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Research Session with the given data.',
      example: getResearchSessionResponsesExamples['404'],
    },
  };
