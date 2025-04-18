// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Data
import { researchLogsMockData } from '@researchmanager/shared/mock';

export const getResearchLogResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully found Research Log named Polynomial Equations 1!',
      payload: researchLogsMockData[1],
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
      message: 'Could not find any Research Logs given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
