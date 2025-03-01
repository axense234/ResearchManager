// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { settingsMockData } from '../body';

export const createSettingsResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully created Settings!',
      payload: settingsMockData[0],
      statusCode: 201,
    },
    {
      message: 'Bad Request. Check the request body again.',
      statusCode: 400,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message: 'User already has Settings.',
      statusCode: 403,
    },
  ];
