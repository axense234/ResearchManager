// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type UpdateActivityFeedDtoOptionsType = {
  type: ApiPropertyOptions;
  researchActivityId: ApiPropertyOptions;
  userId: ApiPropertyOptions;
  activityDays: ApiPropertyOptions;
};

export const updateActivityFeedDtoOptions: UpdateActivityFeedDtoOptionsType = {
  type: {
    example: 'USER',
    description:
      'The type of your newly updated Activity Feed. Available options: USER and RESEARCH_ACTIVITY. Keep in mind that an User cannot have 2 Activity Feeds of type USER.',
  },
  researchActivityId: {
    description:
      'The id of the Research Activity that will be connected to the newly updated Activity Feed. Input the respective Research Activity UUID as the value.',
  },
  userId: {
    description:
      'The id of the User that will be connected to the newly updated Activity Feed. Input the respective User UUID as the value.',
  },
  activityDays: {
    description:
      "The Activity Days of your Activity Feed. Input the respective Activity Days UUID/UUID's in the array.",
  },
};
