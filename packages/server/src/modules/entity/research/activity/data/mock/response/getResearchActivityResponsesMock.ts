// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Data
import { researchActivitiesMockData } from '@researchmanager/shared/mock';

export const getResearchActivityResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully found Research Activity named Reading!',
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
      message: 'Could not find any Research Activities given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
