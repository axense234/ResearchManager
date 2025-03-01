// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getTagApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches a single Tag by an ID(path param).',
  description:
    'Route for fetching a single Tag by an ID(path param). The ID should be the UUID of the Tag you want to fetch. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
