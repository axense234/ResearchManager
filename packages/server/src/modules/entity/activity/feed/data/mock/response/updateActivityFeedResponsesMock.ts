// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { activityFeedsMockData } from '@researchmanager/shared/mock';

export const updateActivityFeedResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully updated Activity Feed!',
      payload: activityFeedsMockData[2],
      statusCode: 200,
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
      message:
        'Research Activity with the provided id already has an Activity Feed!.',
      statusCode: 403,
    },
    {
      message:
        'Could not find any Activity Feeds to update with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
