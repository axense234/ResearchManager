// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock
import { usersMockData } from '../body';

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
