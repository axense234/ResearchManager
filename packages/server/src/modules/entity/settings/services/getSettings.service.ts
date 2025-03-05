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
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import { GetSettingsQueryParams, SettingsFindUniqueObject } from '../types';

@Injectable()
export class GetSettingsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getSettings(
    queryParams: GetSettingsQueryParams,
    settingsId: string,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!settingsId) {
        throw new BadRequestException('No Settings Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const findUniqueObject: SettingsFindUniqueObject = {
        where: { id: settingsId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          chosenOptionType,
          entityType: 'settings',
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        findUniqueObject[chosenOptionType] = optionObject;
      }

      const foundSettings = await this.redis.getOrSetCache(url, async () => {
        const settings =
          await this.prisma.settings.findUnique(findUniqueObject);
        return settings;
      });

      if (!foundSettings) {
        throw new NotFoundException(
          'Could not find any Settings with the provided data.',
        );
      }

      return await this.objectBuilder.buildReturnObject({
        actionType: 'GET SINGLE',
        entity: foundSettings,
        message: `Successfully found Settings for the user: ${foundSettings?.userId || 'Unknown'}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
