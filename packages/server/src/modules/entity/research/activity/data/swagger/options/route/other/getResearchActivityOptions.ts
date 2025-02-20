// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getResearchActivityApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetched a single Research Activity by an ID(path param).',
  description:
    'Route for fetching a single Research Activity by an ID(path param). The ID should be the UUID of the Research Activity you want to fetch. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
