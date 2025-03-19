// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Examples
import { researchLogsMockData } from '../body';

export const deleteResearchLogResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully deleted Research Log!',
      payload: researchLogsMockData[1],
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
        'Could not find any Research Logs to delete with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
