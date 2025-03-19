// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { researchSessionsMockData } from '../body';

export const deleteResearchSessionResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully deleted Research Session!',
      payload: researchSessionsMockData[1],
      statusCode: 200,
    },
    {
      message: 'Bad Request.',
      statusCode: 400,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message:
        'Could not find any Research Sessions to delete with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
