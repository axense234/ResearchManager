// NestJS
import { Inject, Injectable } from '@nestjs/common';
// Cache
import { CACHE_MANAGER } from '@nestjs/cache-manager';
// Types
import DeleteAllCacheThatIncludesGivenKeysType from '../types/DeleteAllCacheThatIncludesGivenKeys';
// IORedis
import { RedisCache } from 'cache-manager-ioredis-yet';

@Injectable()
export class DeleteAllCacheThatIncludesGivenKeysService {
  constructor(@Inject(CACHE_MANAGER) private redisCacheManager: RedisCache) {}

  async deleteAllCacheThatIncludesGivenKeys({
    base,
    type,
    specifiers,
  }: DeleteAllCacheThatIncludesGivenKeysType) {
    let cursor = 0;
    const pattern = `/${base}${type === 'create' ? '[^/]' : ''}*`;
    console.log(pattern);
    let keysToDelete: string[] = [];

    do {
      const scanResponse = await this.redisCacheManager.store.client.scan(
        cursor,
        'MATCH',
        pattern,
      );
      cursor = Number(scanResponse[0]);
      console.log(scanResponse[1]);
      keysToDelete = keysToDelete.concat(
        scanResponse[1].filter(
          (key: string) =>
            !specifiers.some(
              (specifier) =>
                key.includes(specifier.label) && !key.includes(specifier.value),
            ),
        ),
      );
    } while (cursor !== 0);
    keysToDelete = keysToDelete.concat([`/${base}`]);
    console.log(keysToDelete);

    if (keysToDelete.length > 0) {
      await Promise.all(
        keysToDelete.map((key) => this.redisCacheManager.store.client.del(key)),
      );
    }
  }
}
