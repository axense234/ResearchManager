// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getActivityLogsApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches multiple Activity Logs using the given query params.',
  description:
    'Route for fetching multiple Activity Logs that match the given query params. Available query params: searchByKey, searchByValue, sortByKeys, sortByOrders, includeValues, selectValues, chosenOptionType. Available return responses: 3(200, 401, 404).',
};
