// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type UpdateActivityDayPathParamsApiOptionsType = {
  activityDayId: ApiParamOptions;
};

export const updateActivityDayPathParamsApiOptions: UpdateActivityDayPathParamsApiOptionsType =
  {
    activityDayId: {
      required: true,
      name: 'activityDayId',
      description: 'The ID of your desired Activity Day to be updated.',
    },
  };
