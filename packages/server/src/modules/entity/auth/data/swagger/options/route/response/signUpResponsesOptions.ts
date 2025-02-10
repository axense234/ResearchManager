// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';

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
  },
  '400': {
    status: 400,
    description:
      'Could not create user with the data provided or input validation failed.',
  },
  '403': {
    status: 403,
    description: 'Credentials taken.',
  },
};
