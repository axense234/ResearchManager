// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Data
import { researchPhasesMockData } from '@researchmanager/shared/mock';

export const getResearchPhaseResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully found Research Phase named Project123!',
      payload: researchPhasesMockData[0],
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
      message: 'Could not find any Research Phases given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
