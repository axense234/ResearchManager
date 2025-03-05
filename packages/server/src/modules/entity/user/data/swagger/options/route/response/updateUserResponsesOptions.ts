// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Data
import { updateUserResponsesExamples } from '../../../examples';

type UpdateUserResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '403': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const updateUserResponsesOptions: UpdateUserResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObject,
    status: 200,
    description: 'Successfully updated User.',
    example: updateUserResponsesExamples['200'],
  },
  '400': {
    status: 400,
    description: 'Bad Request.',
    example: updateUserResponsesExamples['400'],
  },
  '401': {
    status: 401,
    description: 'Unauthorized access.',
    example: updateUserResponsesExamples['401'],
  },
  '403': {
    status: 403,
    description: 'Email taken by another User.',
    example: updateUserResponsesExamples['403'],
  },
  '404': {
    status: 404,
    description: 'Did not find any User with the given data.',
    example: updateUserResponsesExamples['404'],
  },
};
