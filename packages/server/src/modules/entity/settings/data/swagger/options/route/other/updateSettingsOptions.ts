// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { UpdateSettingsDtoSwaggerWrapper } from '../../../wrappers';
// Examples
import { updateSettingsExamples } from '../../../examples';

export const updateSettingsApiOperationOptions: ApiOperationOptions = {
  summary: 'Updates some Settings by an ID(path param).',
  description:
    'Route for updating some Settings by an ID. The ID should be the UUID of the Settings you want to update. Available query params: includeValues, selectValues, chosenOptionType. Available return responses: 4(200, 400, 401, 404).',
};

export const updateSettingsApiBodyOptions: ApiBodyOptions = {
  type: UpdateSettingsDtoSwaggerWrapper,
  description:
    'The request body containing the wanted updated properties of the Settings you want to update.',
  examples: updateSettingsExamples,
};
