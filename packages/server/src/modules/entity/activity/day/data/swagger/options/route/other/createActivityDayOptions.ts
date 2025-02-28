// Swagger
import { ApiBodyOptions, ApiOperationOptions } from '@nestjs/swagger';
// Dtos
import { CreateActivityDayDto } from 'src/modules/entity/activity/day/dto';
// Examples
import { createActivityDayExamples } from '../../../examples';

export const createActivityDayApiOperationOptions: ApiOperationOptions = {
  summary: 'Creates an Activity Day with the given data.',
  description:
    'Route for creating an Activity Day with the given data inside the request body. Available query params: includeValues, selectValues, chosenOptionType. Available Activity Day examples: 1. Available return responses: 3(201, 400, 401)',
};

export const createActivityDayApiBodyOptions: ApiBodyOptions = {
  type: CreateActivityDayDto,
  description:
    'The request body containing the wanted updated properties of the Activity Day you want to create.',
  examples: createActivityDayExamples,
};
