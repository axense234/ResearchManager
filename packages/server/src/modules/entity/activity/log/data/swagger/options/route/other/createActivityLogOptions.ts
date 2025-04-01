// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dto
import { CreateActivityLogDtoSwaggerWrapper } from '../../../wrappers';
// Examples
import { createActivityLogExamples } from '../../../examples';

export const createActivityLogApiOperationOptions: ApiOperationOptions = {
  summary: 'Creates an Activity Log with the given data.',
  description:
    'Route for creating an Activity Log with the given data inside the request body. Available query params: includeValues, selectValues, chosenOptionType. Available Activity Log examples: 2. Available return responses: 3(201, 400, 401)',
};

export const createActivityLogApiBodyOptions: ApiBodyOptions = {
  type: CreateActivityLogDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Activity Log you want to create.',
  examples: createActivityLogExamples,
};
