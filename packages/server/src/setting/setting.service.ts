// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Dtos
import { CreateSettingDto, UpdateSettingDto } from './dto';
// Redis
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class SettingService {
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

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
        'settings',
        [
          {
            label: 'userId',
            value: createdSetting.userId,
          },
        ],
        'create',
      );

      return {
        message: `Successfully created Setting with the label: ${createdSetting.label}!`,
        setting: createdSetting,
      };
    } catch (error) {
      throw error;
    }
  }

  async updateSetting(dto: UpdateSettingDto, settingId: string) {
    try {
      if (!settingId) {
        throw new BadRequestException('No Setting Id provided.');
      }

      const foundSettingToBeUpdated = await this.prisma.setting.findUnique({
        where: { id: settingId },
      });

      if (!foundSettingToBeUpdated) {
        throw new NotFoundException(
          'Could not find Setting to be updated with the provided data.',
        );
      }

      const updatedSetting = await this.prisma.setting.update({
        where: { id: settingId },
        data: { ...dto },
      });

      if (!updatedSetting) {
        throw new BadRequestException(
          'Could not update Setting with the provided data.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
        'settings',
        [
          {
            label: 'userId',
            value: updatedSetting.userId,
          },
        ],
        'modify',
      );

      return {
        message: `Successfully updated Setting with the label: ${updatedSetting.label}!`,
        setting: updatedSetting,
      };
    } catch (error) {
      throw error;
    }
  }

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

      await this.redis.deleteAllCacheThatIncludesGivenKeys(
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
