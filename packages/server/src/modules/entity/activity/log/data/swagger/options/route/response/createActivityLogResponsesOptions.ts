// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { createActivityLogResponsesExamples } from '../../../examples';

type CreateActivityLogResponsesOptionsType = {
  '201': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
};

export const createActivityLogResponsesOptions: CreateActivityLogResponsesOptionsType =
  {
    '201': {
      type: ReturnObjectBuilderReturnObject,
      status: 201,
      description: 'Successfully created Activity Log.',
      example: createActivityLogResponsesExamples['201'],
    },
    '400': {
      status: 400,
      description: 'Could not create Activity Log with the data provided.',
      example: createActivityLogResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: createActivityLogResponsesExamples['401'],
    },
  };
