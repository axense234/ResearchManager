// Dtos
import type { CreateSettingsDto } from '@researchmanager/shared/types';

export const createSettingsMockData: CreateSettingsDto[] = [
  {
    userId: 'place your user id here',
    allowNotifications: false,
    purgeDirectly: true,
    sidebarPosition: 'LEFT',
    warningOverlayTimeInSeconds: 300,
  },
];
