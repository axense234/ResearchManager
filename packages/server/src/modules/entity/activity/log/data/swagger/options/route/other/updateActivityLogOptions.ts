// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { UpdateActivityLogDtoSwaggerWrapper } from '../../../dto';
// Examples
import { updateActivityLogExamples } from '../../../examples';

export const updateActivityLogApiOperationOptions: ApiOperationOptions = {
  summary: 'Updates a single Activity Log by an ID(path param).',
  description:
    'Route for updating a single Activity Log by an ID. The ID should be the UUID of the Activity Log you want to update. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 5(200, 400, 401, 403, 404).',
};

export const updateActivityLogApiBodyOptions: ApiBodyOptions = {
  type: UpdateActivityLogDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Activity Log you want to update.',
  examples: updateActivityLogExamples,
};
