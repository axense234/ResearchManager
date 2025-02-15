// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { CreateResearchActivityDto } from 'src/modules/entity/research/activity/dto';
// Data
import { createResearchActivityExamples } from '../../../examples';

export const createResearchActivityApiOperationOptions: ApiOperationOptions = {
  summary: 'Creates a Research Activity with the given data.',
  description:
    'Route for creating a Research Activity with the given data inside the request body. Available query params: includeValues, selectValues, chosenOptionType. Available Research Activity examples: 3. Available return responses: 3(201, 400, 401).',
};

export const createResearchActivityApiBodyOptions: ApiBodyOptions = {
  type: CreateResearchActivityDto,
  description:
    'The request body containing the wanted updated properties of the Research Activity you want to create.',
  examples: createResearchActivityExamples,
};
