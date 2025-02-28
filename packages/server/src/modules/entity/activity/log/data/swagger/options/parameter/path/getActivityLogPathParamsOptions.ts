// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type GetActivityLogPathParamsApiOptionsType = {
  activityLogId: ApiParamOptions;
};

export const getActivityLogPathParamsApiOptions: GetActivityLogPathParamsApiOptionsType =
  {
    activityLogId: {
      required: true,
      name: 'activityLogId',
      description: 'The ID of your desired Activity Log to be found.',
    },
  };
