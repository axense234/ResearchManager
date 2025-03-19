// NestJS
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Dto
import type { CreateSettingsDto } from '@researchmanager/shared/types';
// Types
import {
  CreateSettingsQueryParams,
  SettingsCreateDataObject,
  SettingsCreateObject,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

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
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        entityType: 'settings',
        dto,
        actionType: 'CREATE',
        options: {},
      })) as SettingsCreateDataObject;

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

      await this.redis.deleteCacheDeep({
        entityType: 'settings',
        base: 'settings',
        actionType: 'CREATE',
        specifiers: [
          {
            label: 'userId',
            value: createdSettings.userId,
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'CREATE',
        entity: createdSettings,
        message: `Successfully created Settings for user: ${createdSettings.userId}!`,
        additionalNotes,
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ForbiddenException('User already has Settings.');
      } else {
        throw error;
      }
    }
  }
}
