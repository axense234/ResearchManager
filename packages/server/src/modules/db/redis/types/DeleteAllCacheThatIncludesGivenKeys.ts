import DeleteCacheSpecifiers from './DeleteCacheSpecifiers';

type DeleteAllCacheThatIncludesGivenKeysType = {
  base: string;
  specifiers: DeleteCacheSpecifiers;
  type: 'modify' | 'create';
};

export default DeleteAllCacheThatIncludesGivenKeysType;
