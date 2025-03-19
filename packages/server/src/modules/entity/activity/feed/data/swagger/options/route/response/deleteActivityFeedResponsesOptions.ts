// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { deleteActivityFeedResponsesExamples } from '../../../examples';

type DeleteActivityFeedResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const deleteActivityFeedResponsesOptions: DeleteActivityFeedResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully deleted Activity Feed by ID.',
      example: deleteActivityFeedResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: deleteActivityFeedResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: deleteActivityFeedResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Activity Feed to delete with the given data.',
      example: deleteActivityFeedResponsesExamples['404'],
    },
  };
