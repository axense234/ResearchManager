// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { CreateResearchPhaseDtoSwaggerWrapper } from '../../../wrappers';
// Examples
import { createResearchPhaseExamples } from '../../../examples';

export const createResearchPhaseApiOperationOptions: ApiOperationOptions = {
  summary: 'Creates a Research Phase with the given data.',
  description:
    'Route for creating a Research Phase with the given data inside the request body. Available query params: includeValues, selectValues, chosenOptionType. Available Research Phase examples: 3. Available return responses: 3(201, 400, 401)',
};

export const createResearchPhaseApiBodyOptions: ApiBodyOptions = {
  type: CreateResearchPhaseDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Research Phase you want to create.',
  examples: createResearchPhaseExamples,
};
