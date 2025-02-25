// Mock Data
import { researchLogsMockData } from '../body';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';

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
