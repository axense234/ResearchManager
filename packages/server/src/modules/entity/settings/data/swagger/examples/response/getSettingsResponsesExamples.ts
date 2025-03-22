// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { getSettingsResponsesMockData } from '../../../mock';

type GetSettingsResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const getSettingsResponsesExamples: GetSettingsResponsesExamplesType = {
  '200': getSettingsResponsesMockData.find((mock) => mock.statusCode === 200),
  '400': getSettingsResponsesMockData.find((mock) => mock.statusCode === 400),
  '401': getSettingsResponsesMockData.find((mock) => mock.statusCode === 401),
  '404': getSettingsResponsesMockData.find((mock) => mock.statusCode === 404),
};
