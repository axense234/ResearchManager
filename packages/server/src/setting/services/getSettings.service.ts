// NestJS
import { Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/redis.service';

@Injectable()
export class GetSettingsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getSettings(userId?: string, url?: string) {
    try {
      const foundSettings = await this.redis.getOrSetCache(url, async () => {
        const settings = await this.prisma.setting.findMany({
          where: { AND: [{ userId }] },
        });
        return settings;
      });

      if (foundSettings.length < 1) {
        return {
          nbHits: 0,
          message: 'Could not find any Settings with the given input.',
          settings: [],
        };
      }

      return {
        nbHits: foundSettings.length,
        message: `Successfully found ${foundSettings.length} Settings!`,
        settings: foundSettings,
      };
    } catch (error) {
      throw error;
    }
  }
}
