// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { getActivityDaysResponsesExamples } from '../../../examples';

type GetActivityDaysResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getActivityDaysResponsesOptions: GetActivityDaysResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully fetched Activity Days.',
      example: getActivityDaysResponsesExamples['200'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getActivityDaysResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Activity Days given the query params.',
      example: getActivityDaysResponsesExamples['404'],
    },
  };
