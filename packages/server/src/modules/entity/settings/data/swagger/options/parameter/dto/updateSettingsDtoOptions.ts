// Swagger
import { ApiPropertyOptions } from '@nestjs/swagger';

type UpdateSettingsDtoOptionsType = {
  sidebarPosition: ApiPropertyOptions;
  warningOverlayTimeInSeconds: ApiPropertyOptions;
  purgeDirectly: ApiPropertyOptions;
  allowNotifications: ApiPropertyOptions;
  userId: ApiPropertyOptions;
};

export const updateSettingsDtoOptions: UpdateSettingsDtoOptionsType = {
  sidebarPosition: {
    example: 'LEFT',
    description:
      'The sidebar position of your Sidebar. Available options: LEFT, RIGHT.',
  },
  warningOverlayTimeInSeconds: {
    example: 5,
    description:
      'The time in seconds that takes for a warning overlay accept button to be available.',
  },
  purgeDirectly: {
    example: true,
    description:
      'The setting to purge directly an entity. Normally, when deleting an entity it will be available to be either recovered or purged. If this setting is set to true, when deleting an entity it will be purged directly, otherwise it will act as normal.',
  },
  allowNotifications: {
    example: true,
    description:
      'THe setting that allows notifications to be sent. If set to true, notifications will be sent, otherwise things will be quiet.',
  },
  userId: {
    description:
      'The id of the User that will be connected to the newly updated Settings. Input the respective User UUID as the value.',
  },
};
