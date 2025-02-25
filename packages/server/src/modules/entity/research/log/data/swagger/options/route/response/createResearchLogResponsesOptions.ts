// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { createResearchLogResponsesExamples } from '../../../examples';

type CreateResearchLogResponsesOptionsType = {
  '201': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
};

export const createResearchLogResponsesOptions: CreateResearchLogResponsesOptionsType =
  {
    '201': {
      type: ReturnObjectBuilderReturnObject,
      status: 201,
      description: 'Successfully created Research Log.',
      example: createResearchLogResponsesExamples['201'],
    },
    '400': {
      status: 400,
      description: 'Could not create Research Log with the data provided.',
      example: createResearchLogResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: createResearchLogResponsesExamples['401'],
    },
  };
