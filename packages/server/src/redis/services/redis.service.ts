// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { DeleteAllCacheThatIncludesGivenKeysService } from './deleteAllCacheThatIncludesGivenKeys.service';
import { GetOrSetCacheService } from './getOrSetCache.service';
// Types
import DeleteAllCacheThatIncludesGivenKeysType from '../types/DeleteAllCacheThatIncludesGivenKeys';

@Injectable()
export class RedisService {
  constructor(
    private deleteAllCacheThatIncludesGivenKeysService: DeleteAllCacheThatIncludesGivenKeysService,
    private getOrSetCacheService: GetOrSetCacheService,
  ) {}

  async deleteAllCacheThatIncludesGivenKeys({
    base,
    type,
    specifiers,
  }: DeleteAllCacheThatIncludesGivenKeysType) {
    return await this.deleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
      {
        base,
        type,
        specifiers,
      },
    );
  }

  async getOrSetCache(key: any, cb: any) {
    return await this.getOrSetCacheService.getOrSetCache(key, cb);
  }
}
