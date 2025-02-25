// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { getResearchPhasesResponsesExamples } from '../../../examples';

type GetResearchPhasesResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getResearchPhasesResponsesOptions: GetResearchPhasesResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully fetched Research Phases.',
      example: getResearchPhasesResponsesExamples['200'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getResearchPhasesResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Research Phases given the query params.',
      example: getResearchPhasesResponsesExamples['404'],
    },
  };
