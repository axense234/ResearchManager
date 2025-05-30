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
// Dtos
import { UpdateTagDto } from '@researchmanager/shared/types';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import {
  TagUpdateDataObject,
  TagUpdateObject,
  UpdateTagQueryParams,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class UpdateTagService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async updateTag(
    queryParams: UpdateTagQueryParams,
    dto: UpdateTagDto,
    tagId: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      if (!tagId) {
        throw new BadRequestException('No Tag Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        entityType: 'tag',
        dto,
        actionType: 'UPDATE',
        options: {},
      })) as TagUpdateDataObject;

      const updateObject: TagUpdateObject = {
        where: { id: tagId },
        data: dataObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'tag',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        updateObject[chosenOptionType] = optionObject;
      }

      const foundTagToBeUpdated = await this.prisma.tag.findUnique({
        where: { id: tagId },
      });

      if (!foundTagToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Tag to update with the given data.',
        );
      }

      const updatedTag = await this.prisma.tag.update(updateObject);

      if (!updatedTag) {
        throw new BadRequestException(
          'Could not update Tag with the provided data.',
        );
      }

      await this.redis.deleteCacheDeep({
        entityType: 'tag',
        base: 'tags',
        actionType: 'UPDATE',
        specifiers: [
          {
            label: 'userId',
            possibleValues: [updatedTag.userId],
            ignoreIfFalse: true,
          },
        ],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedTag,
        message: `Successfully updated Tag named ${updatedTag.title}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
