// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { getActivityFeedResponsesExamples } from '../../../examples';

type GetActivityFeedResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getActivityFeedResponsesOptions: GetActivityFeedResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully fetched Activity Feed by ID.',
      example: getActivityFeedResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: getActivityFeedResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getActivityFeedResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Activity Feed with the given data.',
      example: getActivityFeedResponsesExamples['404'],
    },
  };
