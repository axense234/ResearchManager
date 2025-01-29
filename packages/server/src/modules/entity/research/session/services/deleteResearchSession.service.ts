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
  DeleteResearchSessionQueryParams,
  ResearchSessionFindUniqueObject,
} from '../types';

@Injectable()
export class DeleteResearchSessionService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async deleteResearchSession(
    queryParams: DeleteResearchSessionQueryParams,
    researchSessionId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!researchSessionId) {
        throw new BadRequestException('No Research Session Id provided.');
      }
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const deleteObject: ResearchSessionFindUniqueObject = {
        where: { id: researchSessionId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchSession',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        deleteObject[chosenOptionType] = optionObject;
      }

      const foundResearchSessionToBeDeleted =
        await this.prisma.researchSession.findUnique({
          where: { id: researchSessionId },
        });

      if (!foundResearchSessionToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Research Session with the data provided.',
        );
      }

      const deletedResearchSession =
        await this.prisma.researchSession.delete(deleteObject);

      if (!deletedResearchSession) {
        throw new BadRequestException(
          'Could not delete Research Session with the data provided.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'researchSessions',
        specifiers: [
          {
            label: 'userId',
            value: deletedResearchSession.userIdForArchivePurposes,
          },
          {
            label: 'researchPhaseId',
            value: deletedResearchSession.researchPhaseId,
          },
        ],
        type: 'modify',
      });

      return this.objectBuilder.buildReturnObject({
        actionType: 'DELETE',
        entity: deletedResearchSession,
        message: `Successfully deleted Research Session named ${deletedResearchSession.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
