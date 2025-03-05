// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getActivityDaysApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches multiple Activity Days using the given query params.',
  description:
    'Route for fetching multiple Activity Days that match the given query params. Available query params: activityFeedId, searchByKey, searchByValue, sortByKeys, sortByOrders, includeValues, selectValues, chosenOptionType. Available return responses: 3(200, 401, 404).',
};
