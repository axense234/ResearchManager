// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/redis.service';
// Dto
import { UpdateSettingDto } from '../dto';

@Injectable()
export class UpdateSettingService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

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

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'settings',
        specifiers: [
          {
            label: 'userId',
            value: updatedSetting.userId,
          },
        ],
        type: 'modify',
      });

      return {
        message: `Successfully updated Setting with the label: ${updatedSetting.label}!`,
        setting: updatedSetting,
      };
    } catch (error) {
      throw error;
    }
  }
}
