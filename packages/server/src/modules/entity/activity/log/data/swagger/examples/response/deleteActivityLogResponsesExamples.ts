// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Examples
import { deleteActivityLogResponsesMockData } from '../../../mock';

type DeleteActivityLogResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const deleteActivityLogResponsesExamples: DeleteActivityLogResponsesExamplesType =
  {
    '200': deleteActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': deleteActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': deleteActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': deleteActivityLogResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
