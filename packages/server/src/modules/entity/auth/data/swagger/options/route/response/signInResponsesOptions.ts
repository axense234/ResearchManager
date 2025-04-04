// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Data
import {
  signInResponsesErrorExamples,
  signInResponsesExamples,
} from '../../../examples';

type SignInResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '400': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const signInResponsesOptions: SignInResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
    status: 200,
    description: 'Successfully signed in User.',
    examples: signInResponsesExamples,
  },
  '400': {
    status: 400,
    description:
      'Invalid values or nonexistent values given. Make sure the body matches the schema required fields at least.',
    example: signInResponsesErrorExamples['400'],
  },
  '401': {
    status: 401,
    description: 'Passwords do not match.',
    example: signInResponsesErrorExamples['401'],
  },
  '404': {
    status: 404,
    description: 'Could not find an user with such an email.',
    example: signInResponsesErrorExamples['404'],
  },
};
