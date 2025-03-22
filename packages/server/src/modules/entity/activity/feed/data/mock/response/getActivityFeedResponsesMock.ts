// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Data
import { activityFeedsMockData } from '@researchmanager/shared/mock';

export const getActivityFeedResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully found Activity Feed of type RESEARCH_ACTIVITY!',
      payload: activityFeedsMockData[0],
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
      message: 'Could not find any Activity Feeds given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
