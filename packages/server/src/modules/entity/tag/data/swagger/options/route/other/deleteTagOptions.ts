// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const deleteTagApiOperationOptions: ApiOperationOptions = {
  summary: 'Deletes a single Tag by an ID(path param).',
  description:
    'Route for deleting a single Tag by an ID. The ID should be the UUID of the Tag you want to delete. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
