// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { updateResearchSessionResponsesExamples } from '../../../examples';

type UpdateResearchSessionResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const updateResearchSessionResponsesOptions: UpdateResearchSessionResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully updated Research Session.',
      example: updateResearchSessionResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Could not update Research Session with the data provided.',
      example: updateResearchSessionResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: updateResearchSessionResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Research Session to update with the given data.',
      example: updateResearchSessionResponsesExamples['404'],
    },
  };
