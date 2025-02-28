// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { updateActivityLogResponsesExamples } from '../../../examples';

type UpdateActivityLogResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const updateActivityLogResponsesOptions: UpdateActivityLogResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully updated Activity Log.',
      example: updateActivityLogResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Could not update Activity Log with the data provided.',
      example: updateActivityLogResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: updateActivityLogResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Activity Log to update with the given data.',
      example: updateActivityLogResponsesExamples['404'],
    },
  };
