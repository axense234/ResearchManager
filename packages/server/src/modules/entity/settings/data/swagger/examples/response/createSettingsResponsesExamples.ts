// Types
import type { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { createSettingsResponsesMockData } from '../../../mock';

type CreateSettingsResponsesExamplesType = {
  '201': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '403': ReturnObjectBuilderReturnObject;
};

export const createSettingsResponsesExamples: CreateSettingsResponsesExamplesType =
  {
    '201': createSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 201,
    ),
    '400': createSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': createSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '403': createSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 403,
    ),
  };
