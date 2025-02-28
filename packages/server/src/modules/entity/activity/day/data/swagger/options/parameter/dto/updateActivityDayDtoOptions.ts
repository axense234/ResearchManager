// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type UpdateActivityDayDtoOptionsType = {
  activityFeedId: ApiPropertyOptions;
  activityLogs: ApiPropertyOptions;
};

export const updateActivityDayDtoOptions: UpdateActivityDayDtoOptionsType = {
  activityFeedId: {
    description:
      'The id of the Activity Feed that will be connected to the newly updated Activity Day. Input the respective Activity Feed UUID as the value.',
  },
  activityLogs: {
    description:
      "The Activity Logs of your Activity Day. Input the respective Activity Logs UUID/UUID's in the array.",
  },
};
