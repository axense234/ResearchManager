// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Data
import { activityLogsMockData } from '@researchmanager/shared/mock';

export const getActivityLogResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully found Activity Log with the subject CREATE!',
      payload: activityLogsMockData[0],
      statusCode: 200,
    },
    {
      message: 'Bad Request.',
      statusCode: 400,
    },
    {
      message: 'Unauthorized.',
      statusCode: 401,
    },
    {
      message: 'Could not find any Activity Logs given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
