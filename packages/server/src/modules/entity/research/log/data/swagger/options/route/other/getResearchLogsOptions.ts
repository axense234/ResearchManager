// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getResearchLogsApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches multiple Research Logs using the given query params.',
  description:
    'Route for fetching multiple Research Logs that match the given query params. Available query params: researchPhaseId, searchByKey, searchByValue, sortByKeys, sortByOrders, includeValues, selectValues, chosenOptionType. Available return responses: 3(200, 401, 404).',
};
