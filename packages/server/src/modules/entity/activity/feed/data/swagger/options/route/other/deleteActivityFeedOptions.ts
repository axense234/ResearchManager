// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const deleteActivityFeedApiOperationOptions: ApiOperationOptions = {
  summary: 'Deletes a single Activity Feed by an ID(path param).',
  description:
    'Route for deleting a single Activity Feed by an ID. The ID should be the UUID of the Activity Feed you want to delete. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
