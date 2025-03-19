// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { getTagResponsesExamples } from '../../../examples';

type GetTagResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getTagResponsesOptions: GetTagResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
    status: 200,
    description: 'Successfully fetched Tag by ID.',
    example: getTagResponsesExamples['200'],
  },
  '400': {
    status: 400,
    description: 'Bad Request.',
    example: getTagResponsesExamples['400'],
  },
  '401': {
    status: 401,
    description: 'Unauthorized.',
    example: getTagResponsesExamples['401'],
  },
  '404': {
    status: 404,
    description: 'Could not find any Tags with the given data.',
    example: getTagResponsesExamples['404'],
  },
};
