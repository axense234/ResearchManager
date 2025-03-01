// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { tagsMockData } from '../body';

export const createTagResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: 'Successfully created Tag!',
    payload: tagsMockData[0],
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
