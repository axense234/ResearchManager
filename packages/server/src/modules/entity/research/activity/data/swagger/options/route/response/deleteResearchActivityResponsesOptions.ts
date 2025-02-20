// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { deleteResearchActivityResponsesExamples } from '../../../examples';

type DeleteResearchActivityResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const deleteResearchActivityResponsesOptions: DeleteResearchActivityResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully deleted Research Activity by ID.',
      example: deleteResearchActivityResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: deleteResearchActivityResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: deleteResearchActivityResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Research Activity to delete with the given data.',
      example: deleteResearchActivityResponsesExamples['404'],
    },
  };
