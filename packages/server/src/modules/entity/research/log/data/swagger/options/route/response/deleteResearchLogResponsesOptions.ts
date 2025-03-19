// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { deleteResearchLogResponsesExamples } from '../../../examples';

type DeleteResearchLogResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const deleteResearchLogResponsesOptions: DeleteResearchLogResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully deleted Research Log by ID.',
      example: deleteResearchLogResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: deleteResearchLogResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: deleteResearchLogResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Research Log to delete with the given data.',
      example: deleteResearchLogResponsesExamples['404'],
    },
  };
