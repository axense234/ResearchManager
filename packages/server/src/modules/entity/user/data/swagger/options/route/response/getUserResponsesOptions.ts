// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Data
import { getUserResponsesExamples } from '../../../examples';

type GetUserResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getUserResponsesOptions: GetUserResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
    status: 200,
    description: 'Successfully fetched User.',
    example: getUserResponsesExamples['200'],
  },
  '400': {
    status: 400,
    description: 'Bad Request.',
    example: getUserResponsesExamples['400'],
  },
  '401': {
    status: 401,
    description: 'Unauthorized access.',
    example: getUserResponsesExamples['401'],
  },
  '404': {
    status: 404,
    description: 'Did not find any User with the given data.',
    example: getUserResponsesExamples['404'],
  },
};
