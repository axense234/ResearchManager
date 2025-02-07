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
import { DeleteTagQueryParams, TagFindUniqueObject } from '../types';

@Injectable()
export class DeleteTagService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async deleteTag(
    queryParams: DeleteTagQueryParams,
    tagId: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!tagId) {
        throw new BadRequestException('No Tag Id provided.');
      }

      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const deleteObject: TagFindUniqueObject = { where: { id: tagId } };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'tag',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        deleteObject[chosenOptionType] = optionObject;
      }

      const foundTagToBeDeleted = await this.prisma.tag.findUnique({
        where: { id: tagId },
      });

      if (!foundTagToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Tag with the provided data.',
        );
      }

      const deletedTag = await this.prisma.tag.delete(deleteObject);

      if (!deletedTag) {
        throw new BadRequestException(
          'Could not delete Tag with the provided information.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'tags',
        specifiers: [
          {
            label: 'userId',
            value: deletedTag.userId,
          },
        ],
        type: 'modify',
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'DELETE',
        entity: deletedTag,
        message: `Successfully deleted Tag named ${deletedTag.title}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
