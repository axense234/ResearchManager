// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { activityLogsMockData } from '@researchmanager/shared/mock';

export const getActivityLogsResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      nbHits: activityLogsMockData.length,
      message: `Successfully found ${activityLogsMockData.length}, Activity Logs given the input!`,
      payload: activityLogsMockData,
      statusCode: 200,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message: 'Could not find any Activity Logs given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
