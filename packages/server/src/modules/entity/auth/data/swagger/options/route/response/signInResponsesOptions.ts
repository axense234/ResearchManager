// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Data
import { signInResponsesExamples } from '../../../examples';

type SignInResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const signInResponsesOptions: SignInResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObject,
    status: 200,
    description: 'Successfully signed in User.',
    examples: signInResponsesExamples,
  },
  '401': {
    status: 401,
    description: 'Passwords do not match.',
  },
  '404': {
    status: 404,
    description: 'Could not find an user with such an email.',
  },
};
