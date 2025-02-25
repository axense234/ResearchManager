// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { getResearchLogsResponsesMockData } from '../../../mock';

type GetResearchLogsResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getResearchLogsResponsesExamples: GetResearchLogsResponsesExamplesType =
  {
    '200': getResearchLogsResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '401': getResearchLogsResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getResearchLogsResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
