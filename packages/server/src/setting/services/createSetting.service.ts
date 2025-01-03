// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/redis.service';
// Dto
import { CreateSettingDto } from '../dto';

@Injectable()
export class CreateSettingService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async createSetting(dto: CreateSettingDto) {
    try {
      const createdSetting = await this.prisma.setting.create({
        data: { ...dto },
      });

      if (!createdSetting) {
        throw new BadRequestException(
          'Could not create Setting with the provided data.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'settings',
        specifiers: [
          {
            label: 'userId',
            value: createdSetting.userId,
          },
        ],
        type: 'create',
      });

      return {
        message: `Successfully created Setting with the label: ${createdSetting.label}!`,
        setting: createdSetting,
      };
    } catch (error) {
      throw error;
    }
  }
}
