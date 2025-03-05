// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getResearchSessionsApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches multiple Research Sessions using the given query params.',
  description:
    'Route for fetching multiple Research Sessions that match the given query params. Available query params: researchPhaseId, searchByKey, searchByValue, sortByKeys, sortByOrders, includeValues, selectValues, chosenOptionType. Available return responses: 3(200, 401, 404).',
};
