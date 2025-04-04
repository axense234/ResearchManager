// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Data
import { getUsersResponsesExamples } from '../../../examples';

type GetUsersResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getUsersResponsesOptions: GetUsersResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
    status: 200,
    description: 'Successfully fetched Users.',
    example: getUsersResponsesExamples['200'],
  },
  '401': {
    status: 401,
    description: 'Unauthorized.',
    example: getUsersResponsesExamples['401'],
  },
  '404': {
    status: 404,
    description: 'Could not find any Users given the query params.',
    example: getUsersResponsesExamples['404'],
  },
};
