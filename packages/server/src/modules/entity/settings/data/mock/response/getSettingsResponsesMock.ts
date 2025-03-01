// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { settingsMockData } from '../body';

export const getSettingsResponsesMockData: ReturnObjectBuilderReturnObject[] = [
  {
    message: 'Successfully found some Settings!',
    payload: settingsMockData[0],
    statusCode: 200,
  },
  {
    message: 'Bad Request.',
    statusCode: 400,
  },
  {
    message: 'Unauthorized.',
    statusCode: 401,
  },
  {
    message: 'Could not find any Settings given the input.',
    error: 'Not Found',
    statusCode: 404,
  },
];
