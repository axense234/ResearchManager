// Swagger
import { ApiOperationOptions } from '@nestjs/swagger';

export const deleteUserApiOperationOptions: ApiOperationOptions = {
  summary: 'Deletes a single User by an Unique Identifier(path param).',
  description:
    "Route for deleting a single User by an Unique Identifier. This Unique Identifier can either be the user's UUID or the user's email. Available query params: uniqueIdentifierType, includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).",
};
