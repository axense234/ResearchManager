// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { settingsMockData } from '@researchmanager/shared/mock';

export const getManySettingsResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      nbHits: settingsMockData.length,
      message: `Successfully found ${settingsMockData.length} Settings given the input!`,
      payload: settingsMockData,
      statusCode: 200,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message: 'Could not find any Settings given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
