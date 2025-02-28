// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type UpdateActivityLogPathParamsApiOptionsType = {
  activityLogId: ApiParamOptions;
};

export const updateActivityLogPathParamsApiOptions: UpdateActivityLogPathParamsApiOptionsType =
  {
    activityLogId: {
      required: true,
      name: 'activityLogId',
      description: 'The ID of your desired Activity Log to be updated.',
    },
  };
