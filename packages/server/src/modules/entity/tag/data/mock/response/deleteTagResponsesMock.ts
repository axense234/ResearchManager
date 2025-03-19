// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { tagsMockData } from '../body';

export const deleteTagResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: 'Successfully deleted Tag!',
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
    message: 'Could not find any Tags to delete with the given the input.',
    error: 'Not Found',
    statusCode: 404,
  },
];
