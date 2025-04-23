// NestJS
import { Inject, Injectable } from '@nestjs/common';
// Cache
import { CACHE_MANAGER } from '@nestjs/cache-manager';
// Types
import DeleteCacheShallowType from '../types/DeleteCacheShallow';
// IORedis
import { RedisCache } from 'cache-manager-ioredis-yet';

@Injectable()
export class DeleteCacheShallowService {
  constructor(@Inject(CACHE_MANAGER) private redisCacheManager: RedisCache) {}

  async deleteCacheShallow({
    base,
    actionType,
    specifiers,
    specifiersType = 'combined',
    deepCall = false,
  }: DeleteCacheShallowType) {
    let cursor = 0;
    const pattern = `/${base}${actionType === 'CREATE' ? '[^/]' : ''}*`;
    let keysToDelete: string[] = [];

    do {
      const scanResponse = await this.redisCacheManager.store.client.scan(
        cursor,
        'MATCH',
        pattern,
      );

      cursor = Number(scanResponse[0]);

      // I think im losing my mind; this code was written using pure trial and error
      // This shit is a horror beyond my comprehension i should of became a farmer not a web developer
      keysToDelete = keysToDelete.concat(
        scanResponse[1].filter((keyToDelete) => {
          const specifiersQuery = specifiers.map((specifier) => {
            if (specifier.ignoreIfFalse) {
              return !(
                keyToDelete.includes(specifier.label) &&
                !specifier.possibleValues.some((value) =>
                  keyToDelete.includes(value),
                )
              );
            } else {
              return (
                keyToDelete.includes(specifier.label) &&
                specifier.possibleValues.some((value) =>
                  keyToDelete.includes(value),
                )
              );
            }
          });

          if (specifiersType && specifiersType === 'either') {
            return specifiersQuery.some((value) => {
              return value;
            });
          } else {
            return specifiersQuery.every((value) => {
              return value;
            });
          }
        }),
      );
    } while (cursor !== 0);
    if (!deepCall) {
      keysToDelete = keysToDelete.concat([`/${base}`]);
    }

    if (keysToDelete.length > 0) {
      await Promise.all(
        keysToDelete.map((key) => this.redisCacheManager.store.client.del(key)),
      );
    }
  }
}
