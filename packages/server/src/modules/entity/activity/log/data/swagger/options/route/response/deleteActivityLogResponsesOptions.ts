// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { deleteActivityLogResponsesExamples } from '../../../examples';

type DeleteActivityLogResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const deleteActivityLogResponsesOptions: DeleteActivityLogResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully deleted Activity Log by ID.',
      example: deleteActivityLogResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: deleteActivityLogResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: deleteActivityLogResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Activity Log to delete with the given data.',
      example: deleteActivityLogResponsesExamples['404'],
    },
  };
