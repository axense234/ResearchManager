// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Examples
import { researchLogsMockData } from '../body';

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
