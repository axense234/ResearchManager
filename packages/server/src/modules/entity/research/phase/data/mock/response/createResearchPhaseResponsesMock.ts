// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { researchPhasesMockData } from '../body';

export const createResearchPhaseResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully created Research Phase!',
      payload: researchPhasesMockData[0],
      statusCode: 201,
    },
    {
      message: 'Bad Request. Check the request body again.',
      statusCode: 400,
    },
    {
      message: 'Unauthorized',
      statusCode: 401,
    },
  ];
