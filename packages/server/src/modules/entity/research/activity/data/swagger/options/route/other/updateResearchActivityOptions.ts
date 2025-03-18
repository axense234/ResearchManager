// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { UpdateResearchActivityDtoSwaggerWrapper } from '../../../dto';
// Data
import { updateResearchActivityExamples } from '../../../examples';

export const updateResearchActivityApiOperationOptions: ApiOperationOptions = {
  summary: 'Updates a single Research Activity by an ID(path param).',
  description:
    'Route for updating a single Research Activity by an ID. The ID should be the UUID of the Research Activity you want to update. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};

export const updateResearchActivityApiBodyOptions: ApiBodyOptions = {
  type: UpdateResearchActivityDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Research Activity you want to update.',
  examples: updateResearchActivityExamples,
};
