// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { getActivityDayResponsesExamples } from '../../../examples';

type GetActivityDayResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getActivityDayResponsesOptions: GetActivityDayResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully fetched Activity Day by ID.',
      example: getActivityDayResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: getActivityDayResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getActivityDayResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Activity Day with the given data.',
      example: getActivityDayResponsesExamples['404'],
    },
  };
