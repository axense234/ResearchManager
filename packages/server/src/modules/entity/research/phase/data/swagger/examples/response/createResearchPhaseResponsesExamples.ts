// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { createResearchPhaseResponsesMockData } from '../../../mock';

type CreateResearchPhaseResponsesExamplesType = {
  '201': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
};

export const createResearchPhaseResponsesExamples: CreateResearchPhaseResponsesExamplesType =
  {
    '201': createResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 201,
    ),
    '400': createResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': createResearchPhaseResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
  };
