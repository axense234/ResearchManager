// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { updateActivityFeedResponsesExamples } from '../../../examples';

type UpdateActivityFeedResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '403': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const updateActivityFeedResponsesOptions: UpdateActivityFeedResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully updated Activity Feed.',
      example: updateActivityFeedResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Could not update Activity Feed with the data provided.',
      example: updateActivityFeedResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: updateActivityFeedResponsesExamples['401'],
    },
    '403': {
      status: 403,
      description:
        'Research Activity with the provided id already has an Activity Feed!.',
      example: updateActivityFeedResponsesExamples['403'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Activity Feed to update with the given data.',
      example: updateActivityFeedResponsesExamples['404'],
    },
  };
