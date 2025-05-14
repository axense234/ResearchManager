// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type CreateActivityLogDtoOptionsType = {
  subject: ApiPropertyOptions;
  message: ApiPropertyOptions;
  activityDays: ApiPropertyOptions;
};

export const createActivityLogDtoOptions: CreateActivityLogDtoOptionsType = {
  subject: {
    example: 'CREATE',
    description:
      'The subject of your Activity Log. Available options: CREATE, UPDATE, DELETE, ARCHIVE, RESTORE, PURGE, RESEARCH_START, RESEARCH_PAUSE, RESEARCH_RESUME, RESEARCH_END, SETTINGS, OTHER.',
  },
  message: {
    example: 'Created a Research Activity.',
    description: 'The message of your Activity Log. Should be descriptive.',
  },
  activityDays: {
    description:
      "The Activity Days of your Activity Log. Input the respective Activity Days UUID/UUID's in the array.",
  },
};
