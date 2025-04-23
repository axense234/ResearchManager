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
import {
  DeleteResearchActivityQueryParams,
  ResearchActivityFindUniqueObject,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class DeleteResearchActivityService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async deleteResearchActivity(
    queryParams: DeleteResearchActivityQueryParams,
    researchActivityId: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      if (!researchActivityId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const deleteObject: ResearchActivityFindUniqueObject = {
        where: { id: researchActivityId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchActivity',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        deleteObject[chosenOptionType] = optionObject;
      }

      const foundResearchActivityToBeDeleted =
        await this.prisma.researchActivity.findUnique({
          where: { id: researchActivityId },
        });

      if (!foundResearchActivityToBeDeleted) {
        throw new NotFoundException(
          'Could not find Research Activity to be deleted with the given id.',
        );
      }

      const deletedResearchActivity =
        await this.prisma.researchActivity.delete(deleteObject);

      if (!deletedResearchActivity) {
        throw new BadRequestException(
          'Could not delete Research Activity with the data provided.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'researchActivity',
        base: 'researchActivities',
        actionType: 'DELETE',
        specifiers: [
          {
            label: 'userId',
            possibleValues: [deletedResearchActivity.userId],
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'DELETE',
        entity: deletedResearchActivity,
        message: `Successfully deleted Research Activity named ${deletedResearchActivity.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
