// Types
import { ActionType } from 'src/modules/util/builder/types';
import DeleteCacheSpecifiers from './DeleteCacheSpecifiers';
import { EntityTypePlural } from '@researchmanager/shared/types';

type DeleteCacheShallowType = {
  base: EntityTypePlural;
  actionType: ActionType;
  specifiers: DeleteCacheSpecifiers;
  specifiersType?: 'combined' | 'either';
  deepCall?: boolean;
};

export default DeleteCacheShallowType;
