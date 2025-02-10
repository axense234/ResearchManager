// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';

type LogOutResponsesOptionsType = {
  '200': ApiResponseOptions;
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
};
