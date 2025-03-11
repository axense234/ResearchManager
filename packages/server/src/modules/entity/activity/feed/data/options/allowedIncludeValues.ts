// Types
import { EntityType, EntityTypePlural } from 'src/modules/util/builder/types';

export const activityFeedAllowedIncludeValues: (
  | EntityType
  | EntityTypePlural
)[] = ['researchActivity', 'user', 'activityDays'];
