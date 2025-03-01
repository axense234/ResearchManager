// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { deleteSettingsResponsesExamples } from '../../../examples';

type DeleteSettingsResponsesOptionsType = {
  '200': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const deleteSettingsResponsesOptions: DeleteSettingsResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully deleted Settings by ID.',
      example: deleteSettingsResponsesExamples['200'],
    },
    '400': {
      status: 400,
      description: 'Bad Request.',
      example: deleteSettingsResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: deleteSettingsResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any Settings to delete with the given data.',
      example: deleteSettingsResponsesExamples['404'],
    },
  };
