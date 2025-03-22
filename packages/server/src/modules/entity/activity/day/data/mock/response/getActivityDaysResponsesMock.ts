// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { activityDaysMockData } from '@researchmanager/shared/mock';

export const getActivityDaysResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      nbHits: activityDaysMockData.length,
      message: `Successfully found ${activityDaysMockData.length}, Activity Days given the input!`,
      payload: activityDaysMockData,
      statusCode: 200,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message: 'Could not find any Activity Days given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
