// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type DeleteSettingsPathParamsApiOptionsType = {
  settingsId: ApiParamOptions;
};

export const deleteSettingsPathParamsApiOptions: DeleteSettingsPathParamsApiOptionsType =
  {
    settingsId: {
      required: true,
      name: 'settingsId',
      description: 'The ID of your desired Settings to be deleted.',
    },
  };
