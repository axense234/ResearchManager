// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type UpdateSettingsPathParamsApiOptionsType = {
  settingsId: ApiParamOptions;
};

export const updateSettingsPathParamsApiOptions: UpdateSettingsPathParamsApiOptionsType =
  {
    settingsId: {
      required: true,
      name: 'settingsId',
      description: 'The ID of your desired Settings to be updated.',
    },
  };
