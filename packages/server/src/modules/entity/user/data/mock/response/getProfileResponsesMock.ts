// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { usersMockData } from '@researchmanager/shared/mock';

export const getProfileResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: `Successfully found user through JWT.`,
    payload: usersMockData.find((mock) => mock.username === 'John'),
    statusCode: 200,
  },
  {
    message: 'Unauthorized',
    statusCode: 401,
  },
];
