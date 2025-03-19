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
import {
  ActivityLogFindUniqueObject,
  GetActivityLogQueryParams,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class GetActivityLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getActivityLog(
    queryParams: GetActivityLogQueryParams,
    activityLogId: string,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      if (!activityLogId) {
        throw new BadRequestException('Please provide an Activity Log Id!');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const findUniqueObject: ActivityLogFindUniqueObject = {
        where: { id: activityLogId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          chosenOptionType,
          entityType: 'activityLog',
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        findUniqueObject[chosenOptionType] = optionObject;
      }

      const foundActivityLog = await this.redis.getOrSetCache(url, async () => {
        const activityLog =
          await this.prisma.activityLog.findUnique(findUniqueObject);
        return activityLog;
      });

      if (!foundActivityLog) {
        throw new NotFoundException(
          'Could not find any Activity Log matching the given data.',
        );
      }

      return await this.objectBuilder.buildReturnObject({
        actionType: 'GET SINGLE',
        entity: foundActivityLog,
        message: `Successfully found Activity Log!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
