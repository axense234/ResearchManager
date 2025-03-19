// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Data
import { activityDaysMockData } from '../body';

export const getActivityDayResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully found Activity Day!',
      payload: activityDaysMockData[0],
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
      message: 'Could not find any Activity Days given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
