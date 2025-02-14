// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getProfileApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetch the current User(Profile) by JWT.',
  description:
    'Route for fetching the current User(profile) using the JWT. No available query params. Only available return response should be 200, unless i did something horrible.',
};
