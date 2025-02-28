// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type DeleteActivityDayPathParamsApiOptionsType = {
  activityDayId: ApiParamOptions;
};

export const deleteActivityDayPathParamsApiOptions: DeleteActivityDayPathParamsApiOptionsType =
  {
    activityDayId: {
      required: true,
      name: 'activityDayId',
      description: 'The ID of your desired Activity Day to be deleted.',
    },
  };
