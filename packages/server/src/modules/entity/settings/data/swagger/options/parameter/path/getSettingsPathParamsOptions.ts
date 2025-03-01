// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type GetSettingsPathParamsApiOptionsType = {
  settingsId: ApiParamOptions;
};

export const getSettingsPathParamsApiOptions: GetSettingsPathParamsApiOptionsType =
  {
    settingsId: {
      required: true,
      name: 'settingsId',
      description: 'The ID of your desired Settings to be found.',
    },
  };
