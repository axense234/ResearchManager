// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { activityFeedsMockData } from '../body';

export const createActivityFeedResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully created Activity Feed!',
      payload: activityFeedsMockData[0],
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
      message:
        'Research Activity with the provided id already has an Activity Feed!.',
      statusCode: 403,
    },
  ];
