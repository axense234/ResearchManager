// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Dtos
import { CreateActivityLogDto } from '../dto';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  ActivityLogCreateDataObject,
  ActivityLogCreateObject,
  CreateActivityLogQueryParams,
} from '../types';

@Injectable()
export class CreateActivityLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async createActivityLog(
    queryParams: CreateActivityLogQueryParams,
    dto: CreateActivityLogDto,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        entityType: 'activityLog',
        dto,
      })) as ActivityLogCreateDataObject;

      const createObject: ActivityLogCreateObject = { data: dataObject };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'activityLog',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        createObject[chosenOptionType] = optionObject;
      }

      const createdActivityLog =
        await this.prisma.activityLog.create(createObject);

      if (!createdActivityLog) {
        throw new BadRequestException(
          'Could not create Activity Log with the provided information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'activityLogs',
        specifiers: [],
        type: 'create',
      });

      return this.objectBuilder.buildReturnObject({
        actionType: 'CREATE',
        entity: createdActivityLog,
        message: `Successfully created Activity Log!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
