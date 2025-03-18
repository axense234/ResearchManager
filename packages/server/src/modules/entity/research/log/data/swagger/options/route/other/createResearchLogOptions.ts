// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dto
import { CreateResearchLogDtoSwaggerWrapper } from '../../../dto';
// Examples
import { createResearchLogExamples } from '../../../examples';

export const createResearchLogApiOperationOptions: ApiOperationOptions = {
  summary: 'Creates a Research Log with the given data.',
  description:
    'Route for creating a Research Log with the given data inside the request body. Available query params: includeValues, selectValues, chosenOptionType. Available Research Log examples: 3. Available return responses: 3(201, 400, 401)',
};

export const createResearchLogApiBodyOptions: ApiBodyOptions = {
  type: CreateResearchLogDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Research Log you want to create.',
  examples: createResearchLogExamples,
};
