// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { tagsMockData } from '../body';

export const getTagResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: 'Successfully found Tag named Goofy!',
    payload: tagsMockData[0],
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
    message: 'Could not find any Tags given the input.',
    error: 'Not Found',
    statusCode: 404,
  },
];
