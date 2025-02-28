// Swagger
import { ApiParamOptions } from '@nestjs/swagger';

type DeleteActivityLogPathParamsApiOptionsType = {
  activityLogId: ApiParamOptions;
};

export const deleteActivityLogPathParamsApiOptions: DeleteActivityLogPathParamsApiOptionsType =
  {
    activityLogId: {
      required: true,
      name: 'activityLogId',
      description: 'The ID of your desired Activity Log to be deleted.',
    },
  };
