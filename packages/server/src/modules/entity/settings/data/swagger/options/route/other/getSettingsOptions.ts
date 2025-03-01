// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getSettingsApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches a single instance of Settings by an ID(path param).',
  description:
    'Route for fetching a single instance of Settings by an ID(path param). The ID should be the UUID of the Settings you want to fetch. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
