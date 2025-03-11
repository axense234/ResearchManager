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
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  DeleteResearchLogQueryParams,
  ResearchLogFindUniqueObject,
} from '../types';

@Injectable()
export class DeleteResearchLogService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async deleteResearchLog(
    queryParams: DeleteResearchLogQueryParams,
    researchLogId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!researchLogId) {
        throw new BadRequestException('Please provide a Research Log Id!');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const deleteObject: ResearchLogFindUniqueObject = {
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
        deleteObject[chosenOptionType] = optionObject;
      }

      const foundResearchLogToBeDeleted =
        await this.prisma.researchLog.findUnique({
          where: { id: researchLogId },
        });

      if (!foundResearchLogToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Research Logs matching the respective provided id.',
        );
      }

      const deletedResearchLog =
        await this.prisma.researchLog.delete(deleteObject);

      if (!deletedResearchLog) {
        throw new BadRequestException(
          'Could not delete Research Log with the provided information.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'researchLog',
        base: 'researchLogs',
        actionType: 'DELETE',
        specifiers: [
          {
            label: 'researchPhaseId',
            value: deletedResearchLog.researchPhaseId,
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'DELETE',
        entity: deletedResearchLog,
        message: `Successfully deleted Research Log named ${deletedResearchLog.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
