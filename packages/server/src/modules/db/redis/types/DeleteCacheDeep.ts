// Types
import { EntityType } from '@researchmanager/shared/types';
import DeleteCacheShallowType from './DeleteCacheShallow';

type DeleteCacheDeepType = {
  entityType: EntityType;
} & DeleteCacheShallowType;

export default DeleteCacheDeepType;
