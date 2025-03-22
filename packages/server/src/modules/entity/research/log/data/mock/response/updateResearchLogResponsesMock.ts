// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Examples
import { researchLogsMockData } from '@researchmanager/shared/mock';

export const updateResearchLogResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully updated Research Phase!',
      payload: researchLogsMockData[2],
      statusCode: 200,
    },
    {
      message: 'Bad Request. Check the request body again.',
      statusCode: 400,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message:
        'Could not find any Research Phases to update with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
