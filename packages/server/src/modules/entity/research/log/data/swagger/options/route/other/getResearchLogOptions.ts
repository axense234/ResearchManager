// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getResearchLogApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches a single Research Log by an ID(path param).',
  description:
    'Route for fetching a single Research Log by an ID(path param). The ID should be the UUID of the Research Log you want to fetch. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
