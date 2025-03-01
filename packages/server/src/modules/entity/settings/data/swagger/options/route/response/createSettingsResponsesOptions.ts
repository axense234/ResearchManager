// Swagger
import { ApiResponseOptions } from '@nestjs/swagger';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { createSettingsResponsesExamples } from '../../../examples';

type CreateSettingsResponsesOptionsType = {
  '201': ApiResponseOptions;
  '400': ApiResponseOptions;
  '401': ApiResponseOptions;
  '403': ApiResponseOptions;
};

export const createSettingsResponsesOptions: CreateSettingsResponsesOptionsType =
  {
    '201': {
      type: ReturnObjectBuilderReturnObject,
      status: 201,
      description: 'Successfully created Settings.',
      example: createSettingsResponsesExamples['201'],
    },
    '400': {
      status: 400,
      description: 'Could not create Settings with the data provided.',
      example: createSettingsResponsesExamples['400'],
    },
    '401': {
      status: 401,
      description: 'Unauthorized.',
      example: createSettingsResponsesExamples['401'],
    },
    '403': {
      status: 403,
      description: 'User already has Settings.',
      example: createSettingsResponsesExamples['403'],
    },
  };
