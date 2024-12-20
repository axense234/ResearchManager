// Config
import { ConfigService } from '@nestjs/config';
// Cache
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
// NestJS
import { Module } from '@nestjs/common';

@Module({})
export class RedisCacheModule {
  static async registerStore(config: ConfigService) {
    return CacheModule.registerAsync({
      useFactory: async () => {
        const store = await redisStore({
          socket: {
            host: config.get('REDIS_HOST'),
            port: config.get('REDIS_PORT'),
          },
        });

        return {
          store: store as unknown as CacheStore,
          ttl: 3 * 60000,
        };
      },
    });
  }
}
