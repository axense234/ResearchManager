// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Examples
import { activityFeedsMockData } from '@researchmanager/shared/mock';

export const deleteActivityFeedResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully deleted Activity Feed!',
      payload: activityFeedsMockData[2],
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
        'Could not find any Activity Feeds to delete with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
