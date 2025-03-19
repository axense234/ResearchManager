// NestJS
import { Injectable, NotFoundException } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { GetTagsQueryParams, TagFindManyObject } from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class GetTagsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getTags(
    queryParams: GetTagsQueryParams,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const {
        userId,
        searchByKey,
        searchByValue,
        sortByKeys,
        sortByOrders,
        includeValues,
        selectValues,
        chosenOptionType,
      } = queryParams;

      const additionalNotes: string[] = [];

      const findManyObject: TagFindManyObject = {};

      const { optionObject, additionalNotes: additionalOptionNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'tag',
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
          entityType: 'tag',
          queryParams: { userId, searchByKey, searchByValue },
        });

      if (additionalQueryNotes) {
        additionalNotes.push(additionalQueryNotes);
      }

      findManyObject.where = queryObject;

      const { orderByObject, additionalNotes: additionalOrderByNotes } =
        this.objectBuilder.buildOrderByObject({
          entityType: 'tag',
          queryParams: { sortByKeys, sortByOrders },
        });

      if (additionalOrderByNotes) {
        additionalNotes.push(additionalOrderByNotes);
      }

      if (orderByObject.length > 0) {
        findManyObject.orderBy = orderByObject;
      }

      const foundTags = await this.redis.getOrSetCache(url, async () => {
        const tags = await this.prisma.tag.findMany(findManyObject);
        return tags;
      });

      if (foundTags.length < 1) {
        throw new NotFoundException('Could not find any Tags given the input.');
      }

      return await this.objectBuilder.buildReturnObject({
        actionType: 'GET MULTIPLE',
        entity: foundTags,
        message: `Successfully found ${foundTags.length} Tags given the input!`,
        nbHits: foundTags.length,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
