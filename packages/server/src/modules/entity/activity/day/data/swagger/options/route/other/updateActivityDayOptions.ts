// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { UpdateActivityDayDtoSwaggerWrapper } from '../../../wrappers';
// Examples
import { updateActivityDayExamples } from '../../../examples';

export const updateActivityDayApiOperationOptions: ApiOperationOptions = {
  summary: 'Updates a single Activity Day by an ID(path param).',
  description:
    'Route for updating a single Activity Day by an ID. The ID should be the UUID of the Activity Day you want to update. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};

export const updateActivityDayApiBodyOptions: ApiBodyOptions = {
  type: UpdateActivityDayDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Activity Day you want to update.',
  examples: updateActivityDayExamples,
};
