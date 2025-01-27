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
  GetResearchPhaseQueryParams,
  ResearchPhaseFindUniqueObject,
} from '../types';

@Injectable()
export class GetResearchPhaseService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getResearchPhase(
    queryParams: GetResearchPhaseQueryParams,
    researchPhaseId: string,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!researchPhaseId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const findUniqueObject: ResearchPhaseFindUniqueObject = {
        where: { id: researchPhaseId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchPhase',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        findUniqueObject[chosenOptionType] = optionObject;
      }

      const foundResearchPhase = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchPhase =
            await this.prisma.researchPhase.findUnique(findUniqueObject);
          return researchPhase;
        },
      );

      if (!foundResearchPhase) {
        throw new NotFoundException(
          'Could not find Research Phase matching the given id.',
        );
      }

      return this.objectBuilder.buildReturnObject({
        actionType: 'GET SINGLE',
        entity: foundResearchPhase,
        message: `Successfully found Research Phase named ${foundResearchPhase.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
