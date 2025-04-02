// Types
import { EntityType, EntityTypePlural } from '@researchmanager/shared/types';

export const activityFeedAllowedIncludeValues: (
  | EntityType
  | EntityTypePlural
)[] = ['researchActivity', 'user', 'activityDays'];
