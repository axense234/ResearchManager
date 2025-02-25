// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getResearchActivitiesApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches multiple Research Activities using the given query params.',
  description:
    'Route for fetching all the Research Activities that match the given query params. Available query params: userId, searchByKey, searchByValue, sortByKeys, sortByOrders, includeValues, selectValues, chosenOptionType. Available return responses: 2(200, 404).',
};
