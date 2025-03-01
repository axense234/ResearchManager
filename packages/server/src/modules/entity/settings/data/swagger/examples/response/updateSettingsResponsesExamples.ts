// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock DATA
import { updateSettingsResponsesMockData } from '../../../mock';

type UpdateSettingsResponsesExamplesType = {
  '200': ReturnObjectBuilderReturnObject;
  '400': ReturnObjectBuilderReturnObject;
  '401': ReturnObjectBuilderReturnObject;
  '404': ReturnObjectBuilderReturnObject;
};

export const updateSettingsResponsesExamples: UpdateSettingsResponsesExamplesType =
  {
    '200': updateSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 200,
    ),
    '400': updateSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 400,
    ),
    '401': updateSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 401,
    ),
    '404': updateSettingsResponsesMockData.find(
      (mock) => mock.statusCode === 404,
    ),
  };
