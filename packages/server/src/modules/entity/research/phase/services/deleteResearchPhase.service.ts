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
  DeleteResearchPhaseQueryParams,
  ResearchPhaseFindUniqueObject,
} from '../types';

@Injectable()
export class DeleteResearchPhaseService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async deleteResearchPhase(
    queryParams: DeleteResearchPhaseQueryParams,
    researchPhaseId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!researchPhaseId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const deleteObject: ResearchPhaseFindUniqueObject = {
        where: {
          id: researchPhaseId,
        },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchPhase',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        deleteObject[chosenOptionType] = optionObject;
      }

      const foundResearchPhaseToBeDeleted =
        await this.prisma.researchPhase.findUnique({
          where: { id: researchPhaseId },
        });

      if (!foundResearchPhaseToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Research Phase to delete using the given id.',
        );
      }

      const deletedResearchPhase =
        await this.prisma.researchPhase.delete(deleteObject);

      if (!deletedResearchPhase) {
        throw new BadRequestException(
          'Could not delete Research Phase with the provided information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'researchPhases',
        specifiers: [
          {
            label: 'userId',
            value: deletedResearchPhase.userIdForArchivePurposes,
          },
          {
            label: 'researchActivityId',
            value: deletedResearchPhase.researchActivityId,
          },
        ],
        type: 'modify',
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'DELETE',
        entity: deletedResearchPhase,
        message: `Successfully deleted Research Phase named ${deletedResearchPhase.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
