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
  GetResearchActivityQueryParams,
  ResearchActivityFindUniqueObject,
} from '../types';

@Injectable()
export class GetResearchActivityService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getResearchActivity(
    queryParams: GetResearchActivityQueryParams,
    researchActivityId: string,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!researchActivityId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const findUniqueObject: ResearchActivityFindUniqueObject = {
        where: { id: researchActivityId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          chosenOptionType,
          entityType: 'researchActivity',
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        findUniqueObject[chosenOptionType] = optionObject;
      }

      const foundResearchActivity = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchActivity =
            await this.prisma.researchActivity.findUnique(findUniqueObject);
          return researchActivity;
        },
      );

      if (!foundResearchActivity) {
        throw new NotFoundException(
          'Could not find any Research Activity with the provided id.',
        );
      }

      return await this.objectBuilder.buildReturnObject({
        actionType: 'GET SINGLE',
        message: `Successfully found Research Activity: ${foundResearchActivity.name}!`,
        entity: foundResearchActivity,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
