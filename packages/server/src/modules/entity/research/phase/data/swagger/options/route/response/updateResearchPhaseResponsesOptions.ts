// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Data
import { updateResearchPhaseResponsesExamples } from '../../../examples';

type UpdateResearchPhaseResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const updateResearchPhaseResponsesOptions: UpdateResearchPhaseResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully updated Research Phase.',
      example: updateResearchPhaseResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Could not update Research Phase with the data provided.',
      example: updateResearchPhaseResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: updateResearchPhaseResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Research Phase to update with the given data.',
      example: updateResearchPhaseResponsesExamples['404'],
    },
  };
