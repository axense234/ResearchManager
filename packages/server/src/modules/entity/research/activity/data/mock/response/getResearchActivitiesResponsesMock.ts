// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { researchActivitiesMockData } from '../body';

export const getResearchActivitiesResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      nbHits: 3,
      message: 'Successfully found 3 Research Activities given the input!',
      payload: researchActivitiesMockData,
      statusCode: 200,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message: 'Could not find any Research Activities given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
