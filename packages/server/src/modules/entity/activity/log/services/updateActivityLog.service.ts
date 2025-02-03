// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Dtos
import { UpdateActivityLogDto } from '../dto';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  ActivityLogUpdateDataObject,
  ActivityLogUpdateObject,
  UpdateActivityLogQueryParams,
} from '../types';

@Injectable()
export class UpdateActivityLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async updateActivityLog(
    queryParams: UpdateActivityLogQueryParams,
    dto: UpdateActivityLogDto,
    activityLogId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!activityLogId) {
        throw new BadRequestException('No Activity Log Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = this.objectBuilder.buildDataObject({
        entityType: 'activityLog',
        dto,
      }) as ActivityLogUpdateDataObject;

      const updateObject: ActivityLogUpdateObject = {
        where: { id: activityLogId },
        data: dataObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'activityLog',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        updateObject[chosenOptionType] = optionObject;
      }

      const foundActivityLogToUpdated =
        await this.prisma.activityLog.findUnique({
          where: { id: activityLogId },
        });

      if (!foundActivityLogToUpdated) {
        throw new NotFoundException(
          'Could not find any Activity Log to be updated with the provided information.',
        );
      }

      const updatedActivityLog =
        await this.prisma.activityLog.update(updateObject);

      if (!updatedActivityLog) {
        throw new BadRequestException(
          'Could not update Activity Log with the provided information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'activityLogs',
        specifiers: [],
        type: 'modify',
      });

      return this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedActivityLog,
        message: `Successfully updated Activity Log!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
