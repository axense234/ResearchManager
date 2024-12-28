// NestJS
import { Inject, Injectable } from '@nestjs/common';
// Cache
import { CACHE_MANAGER } from '@nestjs/cache-manager';
// Config
import { ConfigService } from '@nestjs/config';
// IORedis
import { RedisCache } from 'cache-manager-ioredis-yet';

@Injectable()
export class GetOrSetCacheService {
  constructor(
    @Inject(CACHE_MANAGER) private redisCacheManager: RedisCache,
    private config: ConfigService,
  ) {}

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
}
