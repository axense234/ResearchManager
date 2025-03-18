// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { UpdateResearchPhaseDtoSwaggerWrapper } from 'src/modules/entity/research/phase/data/swagger/dto';
// Examples
import { updateResearchPhaseExamples } from '../../../examples';

export const updateResearchPhaseApiOperationOptions: ApiOperationOptions = {
  summary: 'Updates a single Research Phase by an ID(path param).',
  description:
    'Route for updating a single Research Phase by an ID. The ID should be the UUID of the Research Phase you want to update. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};

export const updateResearchPhaseApiBodyOptions: ApiBodyOptions = {
  type: UpdateResearchPhaseDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Research Phase you want to update.',
  examples: updateResearchPhaseExamples,
};
