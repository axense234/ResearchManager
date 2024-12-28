// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/index.service';

@Injectable()
export class DeleteSettingService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async deleteSetting(settingId: string) {
    try {
      if (!settingId) {
        throw new BadRequestException('No Setting Id provided.');
      }

      const foundSettingToBeDeleted = await this.prisma.setting.findUnique({
        where: { id: settingId },
      });

      if (!foundSettingToBeDeleted) {
        throw new NotFoundException(
          'No Setting found with the provided information.',
        );
      }

      const deletedSetting = await this.prisma.setting.delete({
        where: { id: settingId },
      });

      if (!deletedSetting) {
        throw new BadRequestException(
          'Could not delete Setting with the provided information.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'settings',
        [
          {
            label: 'userId',
            value: deletedSetting.userId,
          },
        ],
        'modify',
      );

      return {
        message: `Successfully deleted Setting with the label: ${deletedSetting.label}!`,
        setting: deletedSetting,
      };
    } catch (error) {
      throw error;
    }
  }
}
