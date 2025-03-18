// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { UpdateTagDtoSwaggerWrapper } from '../../../dto';
// Examples
import { updateTagExamples } from '../../../examples';

export const updateTagApiOperationOptions: ApiOperationOptions = {
  summary: 'Updates a single Tag by an ID(path param).',
  description:
    'Route for updating a single Tag by an ID. The ID should be the UUID of the Tag you want to update. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};

export const updateTagApiBodyOptions: ApiBodyOptions = {
  type: UpdateTagDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Tag you want to update.',
  examples: updateTagExamples,
};
