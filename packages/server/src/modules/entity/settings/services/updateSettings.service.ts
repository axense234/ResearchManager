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
// Dto
import { UpdateSettingsDto } from '../dto';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  SettingsUpdateDataObject,
  SettingsUpdateObject,
  UpdateSettingsQueryParams,
} from '../types';

@Injectable()
export class UpdateSettingsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async updateSettings(
    queryParams: UpdateSettingsQueryParams,
    dto: UpdateSettingsDto,
    settingsId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!settingsId) {
        throw new BadRequestException('No Settings Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        dto,
        entityType: 'settings',
      })) as SettingsUpdateDataObject;

      const updateObject: SettingsUpdateObject = {
        where: { id: settingsId },
        data: dataObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'settings',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        updateObject[chosenOptionType] = optionObject;
      }

      const foundSettingsToBeUpdated = await this.prisma.settings.findUnique({
        where: { id: settingsId },
      });

      if (!foundSettingsToBeUpdated) {
        throw new NotFoundException(
          'Could not find Settings to be updated with the provided data.',
        );
      }

      const updatedSettings = await this.prisma.settings.update(updateObject);

      if (!updatedSettings) {
        throw new BadRequestException(
          'Could not update Settings with the provided data.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'settings',
        specifiers: [
          {
            label: 'userId',
            value: updatedSettings.userId,
          },
        ],
        type: 'modify',
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedSettings,
        message: `Successfully updated Settings for the user: ${updatedSettings.userId}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
