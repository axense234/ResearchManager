// Types
import DeleteCacheSpecifiers from './DeleteCacheSpecifiers';
import { ActionType, EntityTypePlural } from '@researchmanager/shared/types';

type DeleteCacheShallowType = {
  base: EntityTypePlural;
  actionType: ActionType;
  specifiers: DeleteCacheSpecifiers;
  specifiersType?: 'combined' | 'either';
  deepCall?: boolean;
};

export default DeleteCacheShallowType;
