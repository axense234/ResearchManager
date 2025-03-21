// Types
import { EntityType } from 'src/modules/util/builder/types';
import type { EntityTypePlural } from '@researchmanager/shared/types';

export const activityDayAllowedIncludeValues: (
  | EntityType
  | EntityTypePlural
)[] = ['activityFeed', 'activityLogs'];
