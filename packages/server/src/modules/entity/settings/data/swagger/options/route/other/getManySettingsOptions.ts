// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getManySettingsApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches multiple Settings using the given query params.',
  description:
    'Route for fetching multiple Settings that match the given query params. Available query params: userId, searchByKey, searchByValue, sortByKeys, sortByOrders, includeValues, selectValues, chosenOptionType. Available return responses: 3(200, 401, 404).',
};
