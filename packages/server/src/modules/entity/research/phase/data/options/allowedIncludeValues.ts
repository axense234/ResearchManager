// Types
import { EntityType, EntityTypePlural } from '@researchmanager/shared/types';

export const researchPhaseAllowedIncludeValues: (
  | EntityType
  | EntityTypePlural
)[] = ['researchActivity', 'researchLogs', 'researchSessions', 'tags'];
