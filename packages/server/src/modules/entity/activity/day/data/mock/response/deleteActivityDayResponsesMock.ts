// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Examples
import { activityDaysMockData } from '@researchmanager/shared/mock';

export const deleteActivityDayResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully deleted Activity Day!',
      payload: activityDaysMockData[2],
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
        'Could not find any Activity Days to delete with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
