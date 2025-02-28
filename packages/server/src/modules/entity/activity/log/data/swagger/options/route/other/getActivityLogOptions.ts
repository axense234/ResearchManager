// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getActivityLogApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches a single Activity Log by an ID(path param).',
  description:
    'Route for fetching a single Activity Log by an ID(path param). The ID should be the UUID of the Activity Log you want to fetch. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
