// Config
import { ConfigService } from '@nestjs/config';
// Cache
import { CacheModule } from '@nestjs/cache-manager';
// NestJS
import { Module } from '@nestjs/common';

@Module({})
export class RedisCacheModule {
  static async registerStore() {
    return CacheModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        store: (await import('cache-manager-redis-yet')).redisStore,
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
        password: configService.get('REDIS_PASSWORD'),
      }),
      inject: [ConfigService],
    });
  }
}
