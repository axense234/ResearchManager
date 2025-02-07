// NestJS
import { Injectable, NotFoundException } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  GetResearchLogsQueryParams,
  ResearchLogFindManyObject,
} from '../types';

@Injectable()
export class GetResearchLogsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getResearchLogs(
    queryParams: GetResearchLogsQueryParams,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      const {
        researchPhaseId,
        searchByKey,
        searchByValue,
        sortByKeys,
        sortByOrders,
        includeValues,
        selectValues,
        chosenOptionType,
      } = queryParams;

      const additionalNotes: string[] = [];

      const findManyObject: ResearchLogFindManyObject = {};

      const { optionObject, additionalNotes: additionalOptionNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'researchLog',
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
          entityType: 'researchLog',
          queryParams: { searchByKey, searchByValue, researchPhaseId },
        });

      if (additionalQueryNotes) {
        additionalNotes.push(additionalQueryNotes);
      }

      findManyObject.where = queryObject;

      const { orderByObject, additionalNotes: additionalOrderByNotes } =
        this.objectBuilder.buildOrderByObject({
          entityType: 'researchLog',
          queryParams: { sortByKeys, sortByOrders },
        });

      if (additionalOrderByNotes) {
        additionalNotes.push(additionalOrderByNotes);
      }

      if (orderByObject.length > 0) {
        findManyObject.orderBy = orderByObject;
      }

      const foundResearchLogs = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchLogs =
            await this.prisma.researchLog.findMany(findManyObject);
          return researchLogs;
        },
      );

      if (foundResearchLogs.length < 1) {
        throw new NotFoundException(
          'Could not find any Research Logs given the input.',
        );
      }

      return await this.objectBuilder.buildReturnObject({
        actionType: 'GET MULTIPLE',
        entity: foundResearchLogs,
        message: `Successfully found ${foundResearchLogs.length} Research Logs with the provided params.`,
        nbHits: foundResearchLogs.length,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
