// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { usersMockData } from '../body';

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
