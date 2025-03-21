// Types
import { EntityType } from 'src/modules/util/builder/types';
import type { EntityTypePlural } from '@researchmanager/shared/types';

export const researchActivityAllowedIncludeValues: (
  | EntityType
  | EntityTypePlural
)[] = ['activityFeed', 'researchPhases', 'tags', 'user'];
