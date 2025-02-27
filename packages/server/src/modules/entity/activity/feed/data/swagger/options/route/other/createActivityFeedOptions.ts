// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { CreateActivityFeedDto } from 'src/modules/entity/activity/feed/dto';
// Examples
import { createActivityFeedExamples } from '../../../examples';

export const createActivityFeedApiOperationOptions: ApiOperationOptions = {
  summary: 'Creates an Activity Feed with the given data.',
  description:
    'Route for creating an Activity Feed with the given data inside the request body. Available query params: includeValues, selectValues, chosenOptionType. Available Activity Feed examples: 2. Available return responses: 4(201, 400, 401, 403)',
};

export const createActivityFeedApiBodyOptions: ApiBodyOptions = {
  type: CreateActivityFeedDto,
  description:
    'The request body containing the wanted updated properties of the Activity Feed you want to create.',
  examples: createActivityFeedExamples,
};
