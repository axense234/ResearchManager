// Types
import { EntityType, EntityTypePlural } from 'src/modules/util/builder/types';

export const researchPhaseAllowedIncludeValues: (
  | EntityType
  | EntityTypePlural
)[] = ['researchActivity', 'researchLogs', 'researchSessions', 'tags'];
