// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { updateTagResponsesExamples } from '../../../examples';

type UpdateTagResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const updateTagResponsesOptions: UpdateTagResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
    status: 200,
    description: 'Successfully updated Tag by ID.',
    example: updateTagResponsesExamples['200'],
  },
  '400': {
    status: 400,
    description: 'Bad Request.',
    example: updateTagResponsesExamples['400'],
  },
  '401': {
    status: 401,
    description: 'Unauthorized.',
    example: updateTagResponsesExamples['401'],
  },
  '404': {
    status: 404,
    description: 'Could not find any Tag to update with the given data.',
    example: updateTagResponsesExamples['404'],
  },
};
