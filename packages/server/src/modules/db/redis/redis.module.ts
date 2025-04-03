// NestJS
import { Global, Module } from '@nestjs/common';
// Cache
import { RedisCacheModule } from './cache.module';
// Services
import { RedisService } from './services/redis.service';
import { GetOrSetCacheService } from './services/getOrSetCache.service';
import { DeleteCacheShallowService } from './services/deleteCacheShallow.service';
import { DeleteCacheDeepService } from './services/deleteCacheDeep.service';
// Util Service

@Global()
@Module({
  imports: [RedisCacheModule.registerStore()],
  exports: [RedisService],
  providers: [
    RedisService,
    DeleteCacheShallowService,
    DeleteCacheDeepService,
    GetOrSetCacheService,
  ],
})
export class RedisModule {}
