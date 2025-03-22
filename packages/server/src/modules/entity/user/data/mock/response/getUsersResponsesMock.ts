// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock
import { usersMockData } from '@researchmanager/shared/mock';

export const getUsersResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    nbHits: 4,
    message: 'Successfully found 4 Users given the input!',
    payload: usersMockData,
    statusCode: 200,
  },
  {
    message: 'Unauthorized',
    statusCode: 401,
  },
  {
    message: 'Could not find any Users given the input.',
    error: 'Not Found',
    statusCode: 404,
  },
];
