// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Data
import { researchActivitiesMockData } from '../body';

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
