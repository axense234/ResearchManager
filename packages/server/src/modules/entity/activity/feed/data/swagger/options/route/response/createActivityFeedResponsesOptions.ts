// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { createActivityFeedResponsesExamples } from '../../../examples';

type CreateActivityFeedResponsesOptionsType = {
  '201': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '403': ApiResponseOptions;
};

export const createActivityFeedResponsesOptions: CreateActivityFeedResponsesOptionsType =
  {
    '201': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 201,
      description: 'Successfully created Activity Feed.',
      example: createActivityFeedResponsesExamples['201'],
    },
    '400': {
      status: 400,
      description: 'Could not create Activity Feed with the data provided.',
      example: createActivityFeedResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: createActivityFeedResponsesExamples['401'],
    },
    '403': {
      status: 403,
      description:
        'Research Activity with the provided id already has an Activity Feed!.',
      example: createActivityFeedResponsesExamples['403'],
    },
  };
