// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { activityFeedsMockData } from '@researchmanager/shared/mock';

export const getActivityFeedsResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      nbHits: activityFeedsMockData.length,
      message: `Successfully found ${activityFeedsMockData.length}, Activity Feeds given the input!`,
      payload: activityFeedsMockData,
      statusCode: 200,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message: 'Could not find any Activity Feeds given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
