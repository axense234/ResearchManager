// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { researchSessionsMockData } from '../body';

export const getResearchSessionsResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      nbHits: researchSessionsMockData.length,
      message: `Successfully found ${researchSessionsMockData.length} Research Sessions given the input!`,
      payload: researchSessionsMockData,
      statusCode: 200,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message: 'Could not find any Research Sessions given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
