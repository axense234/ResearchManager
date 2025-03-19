// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { updateResearchActivityResponsesExamples } from '../../../examples';

type UpdateResearchActivityResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const updateResearchActivityResponsesOptions: UpdateResearchActivityResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully updated Research Activity by ID.',
      example: updateResearchActivityResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: updateResearchActivityResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: updateResearchActivityResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Research Activity to update with the given data.',
      example: updateResearchActivityResponsesExamples['404'],
    },
  };
