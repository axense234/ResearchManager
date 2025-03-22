// Types
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Mock Data
import { deleteSettingsResponsesMockData } from '../../../mock';

type DeleteSettingsResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const deleteSettingsResponsesExamples: DeleteSettingsResponsesExamplesType =
  {
    '200': deleteSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': deleteSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': deleteSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': deleteSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
