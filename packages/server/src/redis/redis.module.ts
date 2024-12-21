// NestJS
import { Global, Module } from '@nestjs/common';
// Services
import { RedisService } from './redis.service';
// Cache
import { RedisCacheModule } from './cache.module';

@Global()
@Module({
  imports: [RedisCacheModule.registerStore()],
  exports: [RedisService],
  providers: [RedisService],
})
export class RedisModule {}
