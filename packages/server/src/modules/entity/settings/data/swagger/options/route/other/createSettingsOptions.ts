// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dto
import { CreateSettingsDto } from 'src/modules/entity/settings/dto';
// Examples
import { createSettingsExamples } from '../../../examples';

export const createSettingsApiOperationOptions: ApiOperationOptions = {
  summary: 'Creates a Tag with the given data.',
  description:
    'Route for creating Settings with the given data inside the request body. Available query params: includeValues, selectValues, chosenOptionType. Available Settings examples: 1. Available return responses: 3(201, 400, 401)',
};

export const createSettingsApiBodyOptions: ApiBodyOptions = {
  type: CreateSettingsDto,
  description:
    'The request body containing the wanted updated properties of the Settings you want to create.',
  examples: createSettingsExamples,
};
