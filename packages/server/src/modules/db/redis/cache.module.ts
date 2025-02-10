// Config
import { ConfigService } from '@nestjs/config';
// Cache
import { CacheModule } from '@nestjs/cache-manager';
// NestJS
import { Module } from '@nestjs/common';
// Keyv with Redis
import { createKeyv } from '@keyv/redis';

@Module({})
export class RedisCacheModule {
  static async registerStore() {
    return CacheModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          stores: [createKeyv(configService.get('REDIS_INSTANCE_URL'))],
        };
      },
      inject: [ConfigService],
    });
  }
}
