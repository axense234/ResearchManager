// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Examples
import { deleteActivityFeedResponsesMockData } from '../../../mock';

type DeleteActivityFeedResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const deleteActivityFeedResponsesExamples: DeleteActivityFeedResponsesExamplesType =
  {
    '200': deleteActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': deleteActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': deleteActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': deleteActivityFeedResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
