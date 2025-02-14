// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Data
import { getProfileResponsesExamples } from '../../../examples';

type GetProfileResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
};

export const getProfileResponsesOptions: GetProfileResponsesOptionsType = {
  '200': {
    type: ReturnObjectBuilderReturnObject,
    status: 200,
    description: 'Successfully found user through JWT.',
    example: getProfileResponsesExamples['200'],
  },
  '401': {
    status: 401,
    description: 'Unauthorized.',
    example: getProfileResponsesExamples['401'],
  },
};
