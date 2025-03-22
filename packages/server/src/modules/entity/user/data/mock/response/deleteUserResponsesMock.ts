// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { usersMockData } from '@researchmanager/shared/mock';

export const deleteUserResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: 'Successfully deleted User named John!',
    payload: usersMockData.find((mock) => mock.username === 'John'),
    statusCode: 200,
  },
  {
    message: ['uniqueIdentifierType must be a string'],
    error: 'Bad Request',
    statusCode: 400,
  },
  {
    message: 'Unauthorized',
    statusCode: 401,
  },
  {
    message: 'Could not find any User to delete given the input.',
    error: 'Not Found',
    statusCode: 404,
  },
];
