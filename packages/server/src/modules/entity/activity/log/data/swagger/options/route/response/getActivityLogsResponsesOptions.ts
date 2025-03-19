// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { getActivityLogsResponsesExamples } from '../../../examples';

type GetActivityLogsResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getActivityLogsResponsesOptions: GetActivityLogsResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully fetched Activity Logs.',
      example: getActivityLogsResponsesExamples['200'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getActivityLogsResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Activity Logs given the query params.',
      example: getActivityLogsResponsesExamples['404'],
    },
  };
