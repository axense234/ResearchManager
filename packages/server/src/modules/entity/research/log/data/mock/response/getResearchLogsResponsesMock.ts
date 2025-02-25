// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { researchLogsMockData } from '../body';

export const getResearchLogsResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      nbHits: researchLogsMockData.length,
      message: `Successfully found ${researchLogsMockData.length} Research Logs given the input!`,
      payload: researchLogsMockData,
      statusCode: 200,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message: 'Could not find any Research Logs given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
