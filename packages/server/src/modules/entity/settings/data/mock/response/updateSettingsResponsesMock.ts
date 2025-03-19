// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { settingsMockData } from '../body';

export const updateSettingsResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully updated Settings!',
      payload: settingsMockData[0],
      statusCode: 200,
    },
    {
      message: 'Bad Request.',
      statusCode: 400,
    },
    {
      message: 'Unauthorized.',
      statusCode: 401,
    },
    {
      message:
        'Could not find any Settings to update with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
