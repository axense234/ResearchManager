// NestJS
import { Global, Module } from '@nestjs/common';
// Services
import { RedisService } from './redis.service';
// Cache
import { RedisCacheModule } from './cache.module';
// Config
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [RedisCacheModule.registerStore(new ConfigService())],
  exports: [RedisService],
  providers: [RedisService],
})
export class RedisModule {}
