// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  GetResearchLogQueryParams,
  ResearchLogFindUniqueObject,
} from '../types';

@Injectable()
export class GetResearchLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getResearchLog(
    queryParams: GetResearchLogQueryParams,
    researchLogId: string,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!researchLogId) {
        throw new BadRequestException('No Research Log Id provided!');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const findUniqueObject: ResearchLogFindUniqueObject = {
        where: { id: researchLogId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchLog',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        findUniqueObject[chosenOptionType] = optionObject;
      }

      const foundResearchLog = await this.redis.getOrSetCache(url, async () => {
        const researchLog =
          await this.prisma.researchLog.findUnique(findUniqueObject);
        return researchLog;
      });

      if (!foundResearchLog) {
        throw new NotFoundException(
          'Could not find Research Log with the provided id.',
        );
      }

      return await this.objectBuilder.buildReturnObject({
        actionType: 'GET SINGLE',
        message: `Successfully found Research Log named ${foundResearchLog.name}!`,
        entity: foundResearchLog,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
