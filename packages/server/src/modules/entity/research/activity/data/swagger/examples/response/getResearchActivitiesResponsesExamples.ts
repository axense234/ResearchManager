// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { getResearchActivitiesResponsesMockData } from '../../../mock';

type GetResearchActivitiesResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getResearchActivitiesResponsesExamples: GetResearchActivitiesResponsesExamplesType =
  {
    '200': getResearchActivitiesResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '401': getResearchActivitiesResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getResearchActivitiesResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
