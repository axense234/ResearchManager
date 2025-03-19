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
  ActivityDayFindUniqueObject,
  GetActivityDayQueryParams,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class GetActivityDayService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getActivityDay(
    queryParams: GetActivityDayQueryParams,
    activityDayId: string,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      if (!activityDayId) {
        throw new BadRequestException('No Activity Day Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const findUniqueObject: ActivityDayFindUniqueObject = {
        where: { id: activityDayId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          chosenOptionType,
          entityType: 'activityDay',
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        findUniqueObject[chosenOptionType] = optionObject;
      }

      const foundActivityDay = await this.redis.getOrSetCache(url, async () => {
        const activityDay =
          await this.prisma.activityDay.findUnique(findUniqueObject);
        return activityDay;
      });

      if (!foundActivityDay) {
        throw new NotFoundException(
          'Could not find any Activity Day matching the provided information.',
        );
      }

      return await this.objectBuilder.buildReturnObject({
        actionType: 'GET SINGLE',
        entity: foundActivityDay,
        message: `Successfully found Activity Day!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
