// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Data
import { researchActivitiesMockData } from '../body';

export const updateResearchActivityResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully updated Research Activity!',
      payload: researchActivitiesMockData[1],
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
        'Could not find any Research Activities to update with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
