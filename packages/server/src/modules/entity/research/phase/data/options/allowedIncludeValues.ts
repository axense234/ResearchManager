// Types
import { EntityType } from 'src/modules/util/builder/types';
import type { EntityTypePlural } from '@researchmanager/shared/types';

export const researchPhaseAllowedIncludeValues: (
  | EntityType
  | EntityTypePlural
)[] = ['researchActivity', 'researchLogs', 'researchSessions', 'tags'];
