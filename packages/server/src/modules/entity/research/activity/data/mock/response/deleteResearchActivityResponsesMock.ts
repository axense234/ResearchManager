// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { researchActivitiesMockData } from '../body';

export const deleteResearchActivityResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully deleted Research Activity!',
      payload: researchActivitiesMockData[0],
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
      message:
        'Could not find any Research Activities to delete with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
