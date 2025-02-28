// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type GetActivityDayPathParamsApiOptionsType = {
  activityDayId: ApiParamOptions;
};

export const getActivityDayPathParamsApiOptions: GetActivityDayPathParamsApiOptionsType =
  {
    activityDayId: {
      required: true,
      name: 'activityDayId',
      description: 'The ID of your desired Activity Day to be found.',
    },
  };
