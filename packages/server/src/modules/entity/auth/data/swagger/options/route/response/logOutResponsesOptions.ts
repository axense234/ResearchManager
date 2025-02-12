// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Data
import { logOutResponsesExamples } from '../../../examples/response/logOutResponsesExamples';

type LogOutResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
};

export const logOutResponsesOptions: LogOutResponsesOptionsType = {
  '200': {
    status: 200,
    description: 'Successfully logged out the User.',
    example: logOutResponsesExamples['200'],
  },
  '400': {
    status: 400,
    description: 'Invalid values detected(could be either UUID or email).',
    example: logOutResponsesExamples['400'],
  },
};
