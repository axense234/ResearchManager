// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getActivityFeedApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches a single Activity Feed by an ID(path param).',
  description:
    'Route for fetching a single Activity Feed by an ID(path param). The ID should be the UUID of the Activity Feed you want to fetch. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
