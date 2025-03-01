// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const deleteSettingsApiOperationOptions: ApiOperationOptions = {
  summary: 'Deletes some Settings by an ID(path param).',
  description:
    'Route for deleting some Settings by an ID. The ID should be the UUID of the Settings you want to delete. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};
