// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const deleteResearchActivityApiOperationOptions: ApiOperationOptions = {
  summary: 'Deletes a single Research Activity by an ID(path param).',
  description:
    'Route for deleting a single Research Activity by an ID. The ID should be the UUID of the Research Activity you want to delete. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
