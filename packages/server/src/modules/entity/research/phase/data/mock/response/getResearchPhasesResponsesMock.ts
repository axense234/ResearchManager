// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { researchPhasesMockData } from '../body';

export const getResearchPhasesResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      nbHits: 3,
      message: 'Successfully found 3 Research Phases given the input!',
      payload: researchPhasesMockData,
      statusCode: 200,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
    {
      message: 'Could not find any Research Phases given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
