// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { CreateResearchSessionDtoSwaggerWrapper } from '../../../wrappers';
// Examples
import { createResearchSessionExamples } from '../../../examples';

export const createResearchSessionApiOperationOptions: ApiOperationOptions = {
  summary: 'Creates a Research Session with the given data.',
  description:
    'Route for creating a Research Session with the given data inside the request body. Available query params: includeValues, selectValues, chosenOptionType. Available Research Session examples: 3. Available return responses: 3(201, 400, 401)',
};

export const createResearchSessionApiBodyOptions: ApiBodyOptions = {
  type: CreateResearchSessionDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Research Session you want to create.',
  examples: createResearchSessionExamples,
};
