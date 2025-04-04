// Config
import { ConfigService } from '@nestjs/config';
// Cache
import { CacheModule } from '@nestjs/cache-manager';
// NestJS
import { Module } from '@nestjs/common';
// Redis Store
import * as ioredis from 'cache-manager-ioredis-yet';

@Module({})
export class RedisCacheModule {
  static async registerStore() {
    return CacheModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        store: await ioredis.redisStore({
          username: configService.get('REDIS_USERNAME'),
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
          password: configService.get('REDIS_PASSWORD'),
        }),
      }),
      inject: [ConfigService],
    });
  }
}
