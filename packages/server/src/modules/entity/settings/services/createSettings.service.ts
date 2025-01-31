// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Dto
import { CreateSettingsDto } from '../dto';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  CreateSettingsQueryParams,
  SettingsCreateDataObject,
  SettingsCreateObject,
} from '../types';

@Injectable()
export class CreateSettingsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async createSettings(
    queryParams: CreateSettingsQueryParams,
    dto: CreateSettingsDto,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = this.objectBuilder.buildDataObject({
        entityType: 'settings',
        dto,
      }) as SettingsCreateDataObject;

      const createObject: SettingsCreateObject = { data: dataObject };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'settings',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        createObject[chosenOptionType] = optionObject;
      }

      const createdSettings = await this.prisma.settings.create(createObject);

      if (!createdSettings) {
        throw new BadRequestException(
          'Could not create Settings with the provided data.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'settings',
        specifiers: [
          {
            label: 'userId',
            value: createdSettings.userId,
          },
        ],
        type: 'create',
      });

      return this.objectBuilder.buildReturnObject({
        actionType: 'CREATE',
        entity: createdSettings,
        message: `Successfully created Settings for user: ${createdSettings.userId}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
