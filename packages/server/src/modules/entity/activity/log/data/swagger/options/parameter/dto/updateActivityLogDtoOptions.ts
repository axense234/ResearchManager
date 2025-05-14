// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type UpdateActivityLogDtoOptionsType = {
  subject: ApiPropertyOptions;
  message: ApiPropertyOptions;
  activityDays: ApiPropertyOptions;
};

export const updateActivityLogDtoOptions: UpdateActivityLogDtoOptionsType = {
  subject: {
    example: 'UPDATE',
    description:
      'The subject of your Activity Log. Available options: CREATE, UPDATE, DELETE, ARCHIVE, RESTORE, PURGE, RESEARCH_START, RESEARCH_PAUSE, RESEARCH_RESUME, RESEARCH_END, SETTINGS, OTHER.',
  },
  message: {
    example: 'Updated a Research Activity.',
    description: 'The message of your Activity Log. Should be descriptive.',
  },
  activityDays: {
    description:
      "The Activity Days of your Activity Log. Input the respective Activity Days UUID/UUID's in the array.",
  },
};
