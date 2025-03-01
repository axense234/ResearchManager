// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { getManySettingsResponsesExamples } from '../../../examples';

type GetManySettingsResponsesOptionsType = {
  '200': ApiResponseOptions;
  '401': ApiResponseOptions;
  '404': ApiResponseOptions;
};

export const getManySettingsResponsesOptions: GetManySettingsResponsesOptionsType =
  {
    '200': {
      type: ReturnObjectBuilderReturnObject,
      status: 200,
      description: 'Successfully fetched many Settings.',
      example: getManySettingsResponsesExamples['200'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: getManySettingsResponsesExamples['401'],
    },
    '404': {
      status: 404,
      description: 'Could not find any many Settings given the query params.',
      example: getManySettingsResponsesExamples['404'],
    },
  };
