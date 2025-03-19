// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { getSettingsResponsesExamples } from '../../../examples';

type GetSettingsResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getSettingsResponsesOptions: GetSettingsResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
    status: 200,
    description: 'Successfully fetched Settings by ID.',
    example: getSettingsResponsesExamples['200'],
  },
  '400': {
    status: 400,
    description: 'Bad Request.',
    example: getSettingsResponsesExamples['400'],
  },
  '401': {
    status: 401,
    description: 'Unauthorized.',
    example: getSettingsResponsesExamples['401'],
  },
  '404': {
    status: 404,
    description: 'Could not find any Settings with the given data.',
    example: getSettingsResponsesExamples['404'],
  },
};
