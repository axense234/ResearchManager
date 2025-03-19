// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { deleteActivityDayResponsesExamples } from '../../../examples';

type DeleteActivityDayResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const deleteActivityDayResponsesOptions: DeleteActivityDayResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully deleted Activity Day by ID.',
      example: deleteActivityDayResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: deleteActivityDayResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: deleteActivityDayResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Activity Day to delete with the given data.',
      example: deleteActivityDayResponsesExamples['404'],
    },
  };
