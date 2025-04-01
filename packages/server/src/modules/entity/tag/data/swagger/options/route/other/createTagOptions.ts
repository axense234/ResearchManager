// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { CreateTagDtoSwaggerWrapper } from '../../../wrappers';
// Examples
import { createTagExamples } from '../../../examples';

export const createTagApiOperationOptions: ApiOperationOptions = {
  summary: 'Creates a Tag with the given data.',
  description:
    'Route for creating a Tag with the given data inside the request body. Available query params: includeValues, selectValues, chosenOptionType. Available Tag examples: 3. Available return responses: 3(201, 400, 401)',
};

export const createTagApiBodyOptions: ApiBodyOptions = {
  type: CreateTagDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Tag you want to create.',
  examples: createTagExamples,
};
