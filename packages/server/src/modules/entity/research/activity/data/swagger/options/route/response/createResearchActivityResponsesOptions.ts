// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Data
import { createResearchActivityResponsesExamples } from '../../../examples';

type CreateResearchActivityResponsesOptionsType = {
  '201': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
};

export const createResearchActivityResponsesOptions: CreateResearchActivityResponsesOptionsType =
  {
    '201': {
      type: ReturnObjectBuilderReturnObject,
      status: 201,
      description: 'Successfully created Research Activity.',
      example: createResearchActivityResponsesExamples['201'],
    },
    '400': {
      status: 400,
      description: 'Could not create Research Activity with the data provided.',
      example: createResearchActivityResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: createResearchActivityResponsesExamples['401'],
    },
  };
