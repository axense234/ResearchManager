// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Data
import { createResearchPhaseResponsesExamples } from '../../../examples';

type CreateResearchPhaseResponsesOptionsType = {
  '201': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
};

export const createResearchPhaseResponsesOptions: CreateResearchPhaseResponsesOptionsType =
  {
    '201': {
      type: ReturnObjectBuilderReturnObject,
      status: 201,
      description: 'Successfully created Research Phase.',
      example: createResearchPhaseResponsesExamples['201'],
    },
    '400': {
      status: 400,
      description: 'Could not create Research Phase with the data provided.',
      example: createResearchPhaseResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: createResearchPhaseResponsesExamples['401'],
    },
  };
