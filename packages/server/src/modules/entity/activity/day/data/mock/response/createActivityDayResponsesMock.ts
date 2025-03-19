// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { activityDaysMockData } from '../body';

export const createActivityDayResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully created Activity Day!',
      payload: activityDaysMockData[0],
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
  ];
