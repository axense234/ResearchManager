// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dto
import { UpdateResearchLogDto } from 'src/modules/entity/research/log/dto';
// Examples
import { updateResearchLogExamples } from '../../../examples';

export const updateResearchLogApiOperationOptions: ApiOperationOptions = {
  summary: 'Updates a single Research Log by an ID(path param).',
  description:
    'Route for updating a single Research Log by an ID. The ID should be the UUID of the Research Log you want to update. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};

export const updateResearchLogApiBodyOptions: ApiBodyOptions = {
  type: UpdateResearchLogDto,
  description:
    'The request body containing the wanted updated properties of the Research Phase you want to update.',
  examples: updateResearchLogExamples,
};
