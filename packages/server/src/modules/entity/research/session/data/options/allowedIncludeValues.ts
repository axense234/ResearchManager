// Types
import { EntityType } from 'src/modules/util/builder/types';
import { EntityTypePlural } from '@researchmanager/shared/types';

export const researchSessionAllowedIncludeValues: (
  | EntityType
  | EntityTypePlural
)[] = ['researchPhase', 'tags'];
