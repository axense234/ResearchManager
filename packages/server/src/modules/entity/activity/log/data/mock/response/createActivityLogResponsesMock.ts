// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { activityLogsMockData } from '../body';

export const createActivityLogResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully created Activity Log!',
      payload: activityLogsMockData[0],
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
