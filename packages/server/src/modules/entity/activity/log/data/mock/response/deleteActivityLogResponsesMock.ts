// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { activityLogsMockData } from '../body';

export const deleteActivityLogResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully deleted Activity Log!',
      payload: activityLogsMockData[2],
      statusCode: 200,
    },
    {
      message: 'Bad Request.',
      statusCode: 400,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message:
        'Could not find any Activity Logs to delete with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
