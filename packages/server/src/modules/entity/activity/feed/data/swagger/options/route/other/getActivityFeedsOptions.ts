// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getActivityFeedsApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches multiple Activity Feeds using the given query params.',
  description:
    'Route for fetching multiple Activity Feeds that match the given query params. Available query params: userId, researchActivityId, searchByKey, searchByValue, sortByKeys, sortByOrders, includeValues, selectValues, chosenOptionType. Available return responses: 3(200, 401, 404).',
};
