// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Data
import { researchLogsMockData } from '../body';

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
