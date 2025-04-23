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
import { DeleteSettingsQueryParams, SettingsFindUniqueObject } from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class DeleteSettingsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async deleteSettings(
    queryParams: DeleteSettingsQueryParams,
    settingsId: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      if (!settingsId) {
        throw new BadRequestException('No Settings Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const deleteObject: SettingsFindUniqueObject = {
        where: { id: settingsId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'settings',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        deleteObject[chosenOptionType] = optionObject;
      }

      const foundSettingsToBeDeleted = await this.prisma.settings.findUnique({
        where: { id: settingsId },
      });

      if (!foundSettingsToBeDeleted) {
        throw new NotFoundException(
          'No Settings found with the provided information.',
        );
      }

      const deletedSettings = await this.prisma.settings.delete(deleteObject);

      if (!deletedSettings) {
        throw new BadRequestException(
          'Could not delete Settings with the provided information.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'settings',
        base: 'settings',
        actionType: 'DELETE',
        specifiers: [
          {
            label: 'userId',
            possibleValues: [deletedSettings.userId],
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'DELETE',
        entity: deletedSettings,
        message: `Successfully deleted Settings for the user: ${deletedSettings.userId}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
