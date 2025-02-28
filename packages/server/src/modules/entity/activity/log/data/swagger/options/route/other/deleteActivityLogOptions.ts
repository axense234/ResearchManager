// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const deleteActivityLogApiOperationOptions: ApiOperationOptions = {
  summary: 'Deletes a single Activity Log by an ID(path param).',
  description:
    'Route for deleting a single Activity Log by an ID. The ID should be the UUID of the Activity Log you want to delete. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
