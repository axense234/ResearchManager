// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { activityLogsMockData } from '../body';

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
