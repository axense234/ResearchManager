// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { researchSessionsMockData } from '@researchmanager/shared/mock';

export const updateResearchSessionResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully updated Research Session!',
      payload: researchSessionsMockData[2],
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
        'Could not find any Research Sessions to update with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
