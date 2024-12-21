// NestJS
import { Inject, Injectable } from '@nestjs/common';
// Cache
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
// Config
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RedisService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private config: ConfigService,
  ) {}

  // unused
  async getCache(key: any, cb: any) {
    const data = await this.cacheManager.get(key);

    if (data !== undefined && data !== null) {
      return JSON.parse(data as string);
    }

    const plainData = await cb();
    return plainData;
  }

  async getOrSetCache(key: any, cb: any) {
    const data = await this.cacheManager.get(key);

    if (data !== undefined && data !== null) {
      return JSON.parse(data as string);
    }

    const freshData = await cb();
    await this.cacheManager.set(
      key,
      JSON.stringify(freshData),
      eval(this.config.get('REDIS_CACHE_EXP_TIME')),
    );

    return freshData;
  }

  async deleteAllCacheThatIncludedGivenKey(key1: string, key2?: string) {
    const pattern = key2 ? `*${key1}*${key2}*` : `*${key1}*`;
    // i do not know if the same cacheManager.store.keys works like a redisClient.keys
    // if it works like that then the following lines are a performance drop since the keys function is always O(n), where n is the number of keys in the db
    // normally you would use the scan function which is O(1) for every call and in the worst case is O(n)
    // since this app is most likely not going to be that big we shall ignore this problem
    const keysToBeDeleted = await this.cacheManager.store.keys(pattern);
    keysToBeDeleted.forEach(async (key) => {
      await this.cacheManager.del(key);
    });
  }

  async handleCacheMutation(key: string, userId?: string, entityId?: string) {
    if (userId) {
      await this.deleteAllCacheThatIncludedGivenKey(key, userId);
    }

    if (entityId) {
      await this.deleteAllCacheThatIncludedGivenKey(entityId);
    }
  }
}
