// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';

type LogOutResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
};

export const logOutResponsesOptions: LogOutResponsesOptionsType = {
  '200': {
    status: 200,
    description: 'Successfully logged out the User.',
    example: {
      message: 'Successfully logged out the User.',
      statusCode: 200,
    },
  },
  '400': {
    status: 400,
    description: 'Invalid values detected(could be either UUID or email).',
    example: {
      message: ['userId must be a UUID'],
      error: 'Bad Request',
      statusCode: 400,
    },
  },
};
