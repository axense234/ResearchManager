// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { getResearchPhaseResponsesMockData } from '../../../mock';

type GetResearchPhaseResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getResearchPhaseResponsesExamples: GetResearchPhaseResponsesExamplesType =
  {
    '200': getResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': getResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': getResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': getResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
