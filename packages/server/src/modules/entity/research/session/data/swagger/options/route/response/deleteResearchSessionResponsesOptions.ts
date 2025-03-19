// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { deleteResearchSessionResponsesExamples } from '../../../examples';

type DeleteResearchSessionResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const deleteResearchSessionResponsesOptions: DeleteResearchSessionResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully deleted Research Session by ID.',
      example: deleteResearchSessionResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: deleteResearchSessionResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: deleteResearchSessionResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Research Session to delete with the given data.',
      example: deleteResearchSessionResponsesExamples['404'],
    },
  };
