// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type GetActivityFeedPathParamsApiOptionsType = {
  activityFeedId: ApiParamOptions;
};

export const getActivityFeedPathParamsApiOptions: GetActivityFeedPathParamsApiOptionsType =
  {
    activityFeedId: {
      required: true,
      name: 'activityFeedId',
      description: 'The ID of your desired Activity Feed to be found.',
    },
  };
