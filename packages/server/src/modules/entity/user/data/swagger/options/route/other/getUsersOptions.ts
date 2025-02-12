// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getUsersApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches all the Users using the given query params.',
  description:
    'Route for fetching all the Users that match the given query params. Available query params: searchByKey, searchByValue, sortByKeys, sortByOrders, includeValues, selectValues, chosenOptionType. Available return responses: 2(200, 404).',
};
