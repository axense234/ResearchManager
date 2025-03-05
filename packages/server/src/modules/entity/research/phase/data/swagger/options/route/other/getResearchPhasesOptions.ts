// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const getResearchPhasesApiOperationOptions: ApiOperationOptions = {
  summary: 'Fetches multiple Research Phases using the given query params.',
  description:
    'Route for fetching multiple Research Phases that match the given query params. Available query params: researchActivityId, searchByKey, searchByValue, sortByKeys, sortByOrders, includeValues, selectValues, chosenOptionType. Available return responses: 3(200, 401, 404).',
};
