// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { getActivityFeedsResponsesExamples } from '../../../examples';

type GetActivityFeedsResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getActivityFeedsResponsesOptions: GetActivityFeedsResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully fetched Activity Feeds.',
      example: getActivityFeedsResponsesExamples['200'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getActivityFeedsResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Activity Feeds given the query params.',
      example: getActivityFeedsResponsesExamples['404'],
    },
  };
