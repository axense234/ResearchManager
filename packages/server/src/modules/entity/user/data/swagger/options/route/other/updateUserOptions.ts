// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { UpdateUserDtoSwaggerWrapper } from '../../../wrappers';
// Data
import { updateUserExamples } from '../../../examples';

export const updateUserApiOperationOptions: ApiOperationOptions = {
  summary: 'Updates a single User by an Unique Identifier(path param).',
  description:
    "Route for updating a single User by an Unique Identifier. This Unique Identifier can either be the user's UUID or the user's email. Available query params: uniqueIdentifierType, includeValues, selectValues, chosenOptionType. Available return responses: 5(200, 400, 401, 403, 404).",
};

export const updateUserApiBodyOptions: ApiBodyOptions = {
  type: UpdateUserDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the User you want to update.',
  examples: updateUserExamples,
};
