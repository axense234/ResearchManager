// Types
import { ActionType, EntityTypePlural } from 'src/modules/util/builder/types';
import DeleteCacheSpecifiers from './DeleteCacheSpecifiers';

type DeleteCacheShallowType = {
  base: EntityTypePlural;
  actionType: ActionType;
  specifiers: DeleteCacheSpecifiers;
  specifiersType?: 'combined' | 'either';
  deepCall?: boolean;
};

export default DeleteCacheShallowType;
