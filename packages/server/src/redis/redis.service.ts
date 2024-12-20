// NestJS
import { Inject, Injectable } from '@nestjs/common';
// Cache
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async test() {
    await this.cacheManager.set('TEST', 'lol');
  }
}
