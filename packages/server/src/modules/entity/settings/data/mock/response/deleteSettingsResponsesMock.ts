// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
// Mock Data
import { settingsMockData } from '../body';

export const deleteSettingsResponsesMockData: ReturnObjectBuilderReturnObject[] =
  [
    {
      message: 'Successfully deleted Settings!',
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
      message:
        'Could not find any Settings to delete with the given the input.',
      error: 'Not Found',
      statusCode: 404,
    },
  ];
