// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { UpdateResearchSessionDto } from 'src/modules/entity/research/session/dto';
// Examples
import { updateResearchSessionExamples } from '../../../examples';

export const updateResearchSessionApiOperationOptions: ApiOperationOptions = {
  summary: 'Updates a single Research Session by an ID(path param).',
  description:
    'Route for updating a single Research Session by an ID. The ID should be the UUID of the Research Session you want to update. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};

export const updateResearchSessionApiBodyOptions: ApiBodyOptions = {
  type: UpdateResearchSessionDto,
  description:
    'The request body containing the wanted updated properties of the Research Session you want to update.',
  examples: updateResearchSessionExamples,
};
