// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { getResearchLogsResponsesExamples } from '../../../examples';

type GetResearchLogsResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getResearchLogsResponsesOptions: GetResearchLogsResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully fetched Research Logs.',
      example: getResearchLogsResponsesExamples['200'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getResearchLogsResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Research Logs given the query params.',
      example: getResearchLogsResponsesExamples['404'],
    },
  };
