// Types
import { EntityType, EntityTypePlural } from 'src/modules/util/builder/types';

export const researchActivityAllowedIncludeValues: (
  | EntityType
  | EntityTypePlural
)[] = ['activityFeed', 'researchPhases', 'tags', 'user'];
