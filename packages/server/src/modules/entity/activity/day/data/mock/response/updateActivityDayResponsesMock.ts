// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { activityDaysMockData } from '../body';

export const updateActivityDayResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully updated Activity Day!',
      payload: activityDaysMockData[2],
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
        'Research Activity with the provided id already has an Activity Day!.',
      statusCode: 403,
    },
    {
      message:
        'Could not find any Activity Days to update with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
