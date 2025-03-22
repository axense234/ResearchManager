// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { tagsMockData } from '@researchmanager/shared/mock';

export const updateTagResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: 'Successfully updated Tag!',
    payload: tagsMockData[1],
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
    message: 'Could not find any Tags to update with the given the input.',
    error: 'Not Found',
    statusCode: 404,
  },
];
