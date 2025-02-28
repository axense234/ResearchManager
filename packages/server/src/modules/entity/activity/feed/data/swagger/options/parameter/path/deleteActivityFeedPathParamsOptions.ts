// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type DeleteActivityFeedPathParamsApiOptionsType = {
  activityFeedId: ApiParamOptions;
};

export const deleteActivityFeedPathParamsApiOptions: DeleteActivityFeedPathParamsApiOptionsType =
  {
    activityFeedId: {
      required: true,
      name: 'activityFeedId',
      description: 'The ID of your desired Activity Feed to be deleted.',
    },
  };
