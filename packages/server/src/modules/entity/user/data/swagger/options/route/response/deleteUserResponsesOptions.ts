// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Data
import { deleteUserResponsesExamples } from '../../../examples';

type DeleteUserResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const deleteUserResponsesOptions: DeleteUserResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObject,
    status: 200,
    description: 'Successfully deleted User.',
    example: deleteUserResponsesExamples['200'],
  },
  '400': {
    status: 400,
    description: 'Bad Request.',
    example: deleteUserResponsesExamples['400'],
  },
  '401': {
    status: 401,
    description: 'Unauthorized access.',
    example: deleteUserResponsesExamples['401'],
  },
  '404': {
    status: 404,
    description: 'Did not find any User with the given data.',
    example: deleteUserResponsesExamples['404'],
  },
};
