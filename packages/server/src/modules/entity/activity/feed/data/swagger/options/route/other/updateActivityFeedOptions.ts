// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { UpdateActivityFeedDtoSwaggerWrapper } from '../../../dto';
// Examples
import { updateActivityFeedExamples } from '../../../examples';

export const updateActivityFeedApiOperationOptions: ApiOperationOptions = {
  summary: 'Updates a single Activity Feed by an ID(path param).',
  description:
    'Route for updating a single Activity Feed by an ID. The ID should be the UUID of the Activity Feed you want to update. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 5(200, 400, 401, 403, 404).',
};

export const updateActivityFeedApiBodyOptions: ApiBodyOptions = {
  type: UpdateActivityFeedDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Activity Feed you want to update.',
  examples: updateActivityFeedExamples,
};
