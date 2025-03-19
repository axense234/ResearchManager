// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { createActivityDayResponsesExamples } from '../../../examples';

type CreateActivityDayResponsesOptionsType = {
  '201': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
};

export const createActivityDayResponsesOptions: CreateActivityDayResponsesOptionsType =
  {
    '201': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 201,
      description: 'Successfully created Activity Day.',
      example: createActivityDayResponsesExamples['201'],
    },
    '400': {
      status: 400,
      description: 'Could not create Activity Day with the data provided.',
      example: createActivityDayResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: createActivityDayResponsesExamples['401'],
    },
  };
