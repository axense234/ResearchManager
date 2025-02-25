// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const deleteResearchPhaseApiOperationOptions: ApiOperationOptions = {
  summary: 'Deletes a single Research Phase by an ID(path param).',
  description:
    'Route for deleting a single Research Phase by an ID. The ID should be the UUID of the Research Phase you want to delete. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
