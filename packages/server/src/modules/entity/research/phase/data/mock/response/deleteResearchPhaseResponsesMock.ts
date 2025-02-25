// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { researchPhasesMockData } from '../body';

export const deleteResearchPhaseResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully deleted Research Phase!',
      payload: researchPhasesMockData[2],
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
        'Could not find any Research Phases to delete with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
