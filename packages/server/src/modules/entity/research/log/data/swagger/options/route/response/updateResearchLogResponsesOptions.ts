// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { updateResearchLogResponsesExamples } from '../../../examples';

type UpdateResearchLogResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const updateResearchLogResponsesOptions: UpdateResearchLogResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully updated Research Log.',
      example: updateResearchLogResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Could not update Research Log with the data provided.',
      example: updateResearchLogResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: updateResearchLogResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Research Log to update with the given data.',
      example: updateResearchLogResponsesExamples['404'],
    },
  };
