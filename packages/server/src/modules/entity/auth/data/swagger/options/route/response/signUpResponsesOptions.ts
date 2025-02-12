// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Data
import {
  signUpResponsesErrorExamples,
  signUpResponsesExamples,
} from '../../../examples';

type SignUpResponsesOptionsType = {
  '201': ApiResponseOptions;
  '400': ApiResponseOptions;
  '403': ApiResponseOptions;
};

export const signUpResponsesOptions: SignUpResponsesOptionsType = {
  '201': {
    type: ReturnObjectBuilderReturnObject,
    status: 201,
    description: 'Successfully created an User.',
    examples: signUpResponsesExamples,
  },
  '400': {
    status: 400,
    description:
      'Could not create user with the data provided or input validation failed.',
    example: signUpResponsesErrorExamples['400'],
  },
  '403': {
    status: 403,
    description: 'Credentials taken.',
    example: signUpResponsesErrorExamples['403'],
  },
};
