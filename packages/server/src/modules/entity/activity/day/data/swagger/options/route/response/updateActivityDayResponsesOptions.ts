// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Examples
import { updateActivityDayResponsesExamples } from '../../../examples';

type UpdateActivityDayResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const updateActivityDayResponsesOptions: UpdateActivityDayResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObjectSwaggerWrapper,
      status: 200,
      description: 'Successfully updated Activity Day.',
      example: updateActivityDayResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Could not update Activity Day with the data provided.',
      example: updateActivityDayResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: updateActivityDayResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description:
        'Could not find any Activity Day to update with the given data.',
      example: updateActivityDayResponsesExamples['404'],
    },
  };
