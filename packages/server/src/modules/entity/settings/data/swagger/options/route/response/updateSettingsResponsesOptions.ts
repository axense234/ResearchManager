// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { updateSettingsResponsesExamples } from '../../../examples';

type UpdateSettingsResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const updateSettingsResponsesOptions: UpdateSettingsResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully updated Settings by ID.',
      example: updateSettingsResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: updateSettingsResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: updateSettingsResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Settings to update with the given data.',
      example: updateSettingsResponsesExamples['404'],
    },
  };
