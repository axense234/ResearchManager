// Mock Data
import { researchLogsMockData } from '@researchmanager/shared/mock';
// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';

export const createResearchLogResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully created Research Log!',
      payload: researchLogsMockData[0],
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
