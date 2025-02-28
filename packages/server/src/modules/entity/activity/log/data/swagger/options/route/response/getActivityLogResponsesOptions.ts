// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { getActivityLogResponsesExamples } from '../../../examples';

type GetActivityLogResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getActivityLogResponsesOptions: GetActivityLogResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully fetched Activity Log by ID.',
      example: getActivityLogResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: getActivityLogResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getActivityLogResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Activity Log with the given data.',
      example: getActivityLogResponsesExamples['404'],
    },
  };
