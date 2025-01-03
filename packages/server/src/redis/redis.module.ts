// NestJS
import { Global, Module } from '@nestjs/common';
// Cache
import { RedisCacheModule } from './cache.module';
// Services
import { RedisService } from './services/redis.service';
import { DeleteAllCacheThatIncludesGivenKeysService } from './services/deleteAllCacheThatIncludesGivenKeys.service';
import { GetOrSetCacheService } from './services/getOrSetCache.service';

@Global()
@Module({
  imports: [RedisCacheModule.registerStore()],
  exports: [RedisService],
  providers: [
    RedisService,
    DeleteAllCacheThatIncludesGivenKeysService,
    GetOrSetCacheService,
  ],
})
export class RedisModule {}
