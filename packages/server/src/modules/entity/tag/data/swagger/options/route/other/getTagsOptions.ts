// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getTagsApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches multiple Tags using the given query params.',
  description:
    'Route for fetching multiple Tags that match the given query params. Available query params: userId, searchByKey, searchByValue, sortByKeys, sortByOrders, includeValues, selectValues, chosenOptionType. Available return responses: 2(200, 404).',
};
