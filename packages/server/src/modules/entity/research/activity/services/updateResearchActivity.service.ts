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
// Dtos
import { UpdateResearchActivityDto } from '../dto';
// Types
import {
  ResearchActivityUpdateDataObject,
  ResearchActivityUpdateObject,
  UpdateResearchActivityQueryParams,
} from '../types';
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';

@Injectable()
export class UpdateResearchActivityService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async updateResearchActivity(
    queryParams: UpdateResearchActivityQueryParams,
    dto: UpdateResearchActivityDto,
    researchActivityId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!researchActivityId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject: ResearchActivityUpdateDataObject = { ...(dto as any) };

      if (dto.researchPhases) {
        dataObject.researchPhases = {
          connect: dto.researchPhases.map((id) => {
            return { id };
          }),
        };
      }

      if (dto.tags) {
        dataObject.tags = {
          connect: dto.tags.map((id) => {
            return { id };
          }),
        };
      }

      if (dto.activityFeed) {
        dataObject.activityFeed = {
          connect: { id: dto.activityFeed },
        };
      }

      const updateObject: ResearchActivityUpdateObject = {
        where: { id: researchActivityId },
        data: dataObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchActivity',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        updateObject[chosenOptionType] = optionObject;
      }

      const foundResearchActivityToBeUpdated =
        await this.prisma.researchActivity.findUnique({
          where: { id: researchActivityId },
        });

      if (!foundResearchActivityToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Research Activities to be updated with the given id.',
        );
      }

      const updatedResearchActivity =
        await this.prisma.researchActivity.update(updateObject);

      if (!updatedResearchActivity) {
        throw new BadRequestException(
          'Could not update Research Activity with the provided information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'researchActivities',
        specifiers: [
          { label: 'userId', value: updatedResearchActivity.userId },
        ],
        type: 'modify',
      });

      return this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedResearchActivity,
        message: `Successfully updated Research Activity named ${updatedResearchActivity.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
