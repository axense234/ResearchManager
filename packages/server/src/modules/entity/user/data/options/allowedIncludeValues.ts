// Types
import { EntityType } from 'src/modules/util/builder/types';
import type { EntityTypePlural } from '@researchmanager/shared/types';

export const userAllowedIncludeValues: (EntityType | EntityTypePlural)[] = [
  'activityFeed',
  'researchActivities',
  'settings',
  'tags',
];
