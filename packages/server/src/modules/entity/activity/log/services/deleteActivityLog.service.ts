// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// DB Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  ActivityLogFindUniqueObject,
  DeleteActivityLogQueryParams,
} from '../types';

@Injectable()
export class DeleteActivityLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async deleteActivityLog(
    queryParams: DeleteActivityLogQueryParams,
    activityLogId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!activityLogId) {
        throw new BadRequestException('No Activity Log Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const deleteObject: ActivityLogFindUniqueObject = {
        where: { id: activityLogId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'activityLog',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        deleteObject[chosenOptionType] = optionObject;
      }

      const foundActivityLogToBeDeleted =
        await this.prisma.activityLog.findUnique({
          where: { id: activityLogId },
        });

      if (!foundActivityLogToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Activity Log matching the given data.',
        );
      }

      const deletedActivityLog =
        await this.prisma.activityLog.delete(deleteObject);

      if (!deletedActivityLog) {
        throw new BadRequestException(
          'Could not delete Activity Log with the given data.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'activityLogs',
        specifiers: [],
        type: 'modify',
      });

      return this.objectBuilder.buildReturnObject({
        actionType: 'DELETE',
        entity: deletedActivityLog,
        message: `Successfully deleted Activity Log!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
