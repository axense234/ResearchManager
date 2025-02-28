// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { activityDaysMockData } from '../body';

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
