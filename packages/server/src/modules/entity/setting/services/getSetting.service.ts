// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';

@Injectable()
export class GetSettingService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getSetting(settingId: string, url: string) {
    try {
      if (!settingId) {
        throw new BadRequestException('No Setting Id provided.');
      }

      const foundSetting = await this.redis.getOrSetCache(url, async () => {
        const setting = await this.prisma.setting.findUnique({
          where: { id: settingId },
        });
        return setting;
      });

      if (!foundSetting) {
        throw new NotFoundException(
          'Could not find any Setting with the provided data.',
        );
      }

      return {
        message: `Successfully found setting with the label ${foundSetting.label}!`,
        setting: foundSetting,
      };
    } catch (error) {
      throw error;
    }
  }
}
