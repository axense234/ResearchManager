// NestJS
import { Injectable, NotFoundException } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import {
  GetResearchPhasesQueryParams,
  ResearchPhaseFindManyObject,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class GetResearchPhasesService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getResearchPhases(
    queryParams: GetResearchPhasesQueryParams,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const {
        researchActivityId,
        searchByKey,
        searchByValue,
        sortByKeys,
        sortByOrders,
        includeValues,
        selectValues,
        chosenOptionType,
      } = queryParams;

      const additionalNotes: string[] = [];

      const findManyObject: ResearchPhaseFindManyObject = {};

      const { optionObject, additionalNotes: additionalOptionNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchPhase',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (additionalOptionNotes) {
        additionalNotes.push(additionalOptionNotes);
      }

      if (chosenOptionType && optionObject) {
        findManyObject[chosenOptionType] = optionObject;
      }

      const { queryObject, additionalNotes: additionalQueryNotes } =
        this.objectBuilder.buildQueryObject({
          entityType: 'researchPhase',
          queryParams: { researchActivityId, searchByKey, searchByValue },
        });

      if (additionalQueryNotes) {
        additionalNotes.push(additionalQueryNotes);
      }

      findManyObject.where = queryObject;

      const { orderByObject, additionalNotes: additionalOrderByNotes } =
        this.objectBuilder.buildOrderByObject({
          entityType: 'researchPhase',
          queryParams: { sortByKeys, sortByOrders },
        });

      if (additionalOrderByNotes) {
        additionalNotes.push(additionalOrderByNotes);
      }

      if (orderByObject.length > 0) {
        findManyObject.orderBy = orderByObject;
      }

      const foundResearchPhases = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchPhases =
            await this.prisma.researchPhase.findMany(findManyObject);
          return researchPhases;
        },
      );

      if (foundResearchPhases.length < 1) {
        throw new NotFoundException(
          'Could not find any Research Phases given the input',
        );
      }

      return await this.objectBuilder.buildReturnObject({
        actionType: 'GET MULTIPLE',
        entity: foundResearchPhases,
        message: `Successfully found ${foundResearchPhases.length} Research Phases, given the params.`,
        nbHits: foundResearchPhases.length,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
