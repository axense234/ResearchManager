// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { createResearchSessionResponsesExamples } from '../../../examples';

type CreateResearchSessionResponsesOptionsType = {
  '201': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
};

export const createResearchSessionResponsesOptions: CreateResearchSessionResponsesOptionsType =
  {
    '201': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 201,
      description: 'Successfully created Research Session.',
      example: createResearchSessionResponsesExamples['201'],
    },
    '400': {
      status: 400,
      description: 'Could not create Research Session with the data provided.',
      example: createResearchSessionResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: createResearchSessionResponsesExamples['401'],
    },
  };
