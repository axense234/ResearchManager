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
import { GetTagQueryParams, TagFindUniqueObject } from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class GetTagService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getTag(
    queryParams: GetTagQueryParams,
    tagId: string,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      if (!tagId) {
        throw new BadRequestException('No Tag Id provided!');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const findUniqueObject: TagFindUniqueObject = {
        where: { id: tagId },
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          chosenOptionType,
          entityType: 'tag',
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        findUniqueObject[chosenOptionType] = optionObject;
      }

      const foundTag = await this.redis.getOrSetCache(url, async () => {
        const tag = await this.prisma.tag.findUnique(findUniqueObject);
        return tag;
      });

      if (!foundTag) {
        throw new NotFoundException(
          'Could not find any Tag with the provided data.',
        );
      }

      return await this.objectBuilder.buildReturnObject({
        actionType: 'GET SINGLE',
        entity: foundTag,
        message: `Successfully found Tag: ${foundTag.title}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
