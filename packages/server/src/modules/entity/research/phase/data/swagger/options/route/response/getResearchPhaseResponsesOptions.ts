// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Data
import { getResearchPhaseResponsesExamples } from '../../../examples';

type GetResearchPhaseResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getResearchPhaseResponsesOptions: GetResearchPhaseResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully fetched Research Phase by ID.',
      example: getResearchPhaseResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: getResearchPhaseResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getResearchPhaseResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Research Phase with the given data.',
      example: getResearchPhaseResponsesExamples['404'],
    },
  };
