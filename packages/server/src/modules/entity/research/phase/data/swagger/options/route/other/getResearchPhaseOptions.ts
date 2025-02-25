// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getResearchPhaseApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches a single Research Phase by an ID(path param).',
  description:
    'Route for fetching a single Research Phase by an ID(path param). The ID should be the UUID of the Research Phase you want to fetch. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
