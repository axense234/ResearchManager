// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Dtos
import { CreateTagDto } from '../dto';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  CreateTagQueryParams,
  TagCreateDataObject,
  TagCreateObject,
} from '../types';

@Injectable()
export class CreateTagService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async createTag(
    queryParams: CreateTagQueryParams,
    dto: CreateTagDto,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        entityType: 'tag',
        dto,
      })) as TagCreateDataObject;

      const createObject: TagCreateObject = { data: dataObject };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'tag',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        createObject[chosenOptionType] = optionObject;
      }

      const createdTag = await this.prisma.tag.create(createObject);

      if (!createdTag) {
        throw new BadRequestException(
          'Could not create Tag with the data provided.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'tags',
        specifiers: [
          {
            label: 'userId',
            value: createdTag.userId,
          },
        ],
        type: 'create',
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'CREATE',
        entity: createdTag,
        message: `Successfully created Tag named ${createdTag.title}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
