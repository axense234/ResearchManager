// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Data
import { researchSessionsMockData } from '@researchmanager/shared/mock';

export const getResearchSessionResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: `Successfully found Research Session named ${researchSessionsMockData[1]?.name}!`,
      payload: researchSessionsMockData[1],
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
      message: 'Could not find any Research Sessions given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
