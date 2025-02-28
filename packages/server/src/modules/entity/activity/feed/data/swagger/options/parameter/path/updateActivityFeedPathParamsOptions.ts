// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type UpdateActivityFeedPathParamsApiOptionsType = {
  activityFeedId: ApiParamOptions;
};

export const updateActivityFeedPathParamsApiOptions: UpdateActivityFeedPathParamsApiOptionsType =
  {
    activityFeedId: {
      required: true,
      name: 'activityFeedId',
      description: 'The ID of your desired Activity Feed to be updated.',
    },
  };
