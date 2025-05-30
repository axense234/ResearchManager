// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { activityLogsMockData } from '@researchmanager/shared/mock';

export const updateActivityLogResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully updated Activity Log!',
      payload: activityLogsMockData[2],
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
        'Could not find any Activity Logs to update with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
