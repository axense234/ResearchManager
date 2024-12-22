// NestJS
import { Inject, Injectable } from '@nestjs/common';
// Cache
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
// Config
import { ConfigService } from '@nestjs/config';
// IORedis
import { RedisStore } from 'cache-manager-ioredis-yet';
// Types
import DeleteCacheSpecifiers from './types/DeleteCacheSpecifiers';

@Injectable()
export class RedisService {
  constructor(
    @Inject(CACHE_MANAGER) private redisCacheManager: Cache<RedisStore>,
    private config: ConfigService,
  ) {}

  async test() {
    console.log(this.redisCacheManager.store);
  }

  async getOrSetCache(key: any, cb: any) {
    const data = await this.redisCacheManager.store.client.get(key);

    if (JSON.parse(data) !== null) {
      return JSON.parse(data);
    }

    const freshData = await cb();
    await this.redisCacheManager.store.client.setex(
      key,
      eval(this.config.get('REDIS_CACHE_EXP_TIME')),
      JSON.stringify(freshData),
    );

    return freshData;
  }

  async deleteAllCacheThatIncludesGivenKeys(
    base: string,
    specifiers: DeleteCacheSpecifiers,
    type: 'modify' | 'create',
  ) {
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
          (key) =>
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
