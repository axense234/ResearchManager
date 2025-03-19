// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { createTagResponsesExamples } from '../../../examples';

type CreateTagResponsesOptionsType = {
  '201': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
};

export const createTagResponsesOptions: CreateTagResponsesOptionsType = {
  '201': {
    type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
    status: 201,
    description: 'Successfully created Tag.',
    example: createTagResponsesExamples['201'],
  },
  '400': {
    status: 400,
    description: 'Could not create Tag with the data provided.',
    example: createTagResponsesExamples['400'],
  },
  '401': {
    status: 401,
    description: 'Unauthorized.',
    example: createTagResponsesExamples['401'],
  },
};
