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
  GetResearchSessionQueryParams,
  ResearchSessionFindUniqueObject,
} from '../types';

@Injectable()
export class GetResearchSessionService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getResearchSession(
    queryParams: GetResearchSessionQueryParams,
    researchSessionId: string,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!researchSessionId) {
        throw new BadRequestException('Please provide a Research Session Id!');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const findUniqueObject: ResearchSessionFindUniqueObject = {
        where: { id: researchSessionId },
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

      const foundResearchSession = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchSession =
            await this.prisma.researchSession.findUnique(findUniqueObject);
          return researchSession;
        },
      );

      if (!foundResearchSession) {
        throw new NotFoundException(
          'Could not find any Research Session with the information provided.',
        );
      }

      return this.objectBuilder.buildReturnObject({
        actionType: 'GET SINGLE',
        entity: foundResearchSession,
        message: `Successfully found Research Session named ${foundResearchSession.name}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
