// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { tagsMockData } from '../body';

export const getTagsResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    nbHits: tagsMockData.length,
    message: `Successfully found ${tagsMockData.length}, Tags given the input!`,
    payload: tagsMockData,
    statusCode: 200,
  },
  {
    message: 'Unauthorized',
    statusCode: 401,
  },
  {
    message: 'Could not find any Tags given the input.',
    error: 'Not Found',
    statusCode: 404,
  },
];
