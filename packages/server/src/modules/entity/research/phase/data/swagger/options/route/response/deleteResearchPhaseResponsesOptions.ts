// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { deleteResearchPhaseResponsesExamples } from '../../../examples';

type DeleteResearchPhaseResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const deleteResearchPhaseResponsesOptions: DeleteResearchPhaseResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully deleted Research Phase by ID.',
      example: deleteResearchPhaseResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: deleteResearchPhaseResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: deleteResearchPhaseResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Research Phase to delete with the given data.',
      example: deleteResearchPhaseResponsesExamples['404'],
    },
  };
