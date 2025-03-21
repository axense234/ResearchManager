// Types
import { EntityType } from 'src/modules/util/builder/types';
import type { EntityTypePlural } from '@researchmanager/shared/types';

export const tagAllowedIncludeValues: (EntityType | EntityTypePlural)[] = [
  'researchActivities',
  'researchPhases',
  'researchLogs',
  'researchSessions',
  'user',
];
