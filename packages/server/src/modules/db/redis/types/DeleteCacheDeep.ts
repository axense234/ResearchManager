// Types
import { EntityType } from 'src/modules/util/builder/types';
import DeleteCacheShallowType from './DeleteCacheShallow';

type DeleteCacheDeepType = {
  entityType: EntityType;
} & DeleteCacheShallowType;

export default DeleteCacheDeepType;
