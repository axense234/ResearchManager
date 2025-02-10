// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const logOutApiOperationOptions: ApiOperationOptions = {
  summary: 'Logs Out the User with given query params: userId, email.',
  description:
    'Route for Logging Out the User with the given query params: userId, email. Available query params: userId, email. Available return responses: 1(200).',
};
