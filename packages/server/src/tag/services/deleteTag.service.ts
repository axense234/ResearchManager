// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/index.service';

@Injectable()
export class DeleteTagService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async deleteTag(tagId: string) {
    try {
      if (!tagId) {
        throw new BadRequestException('No Tag Id provided.');
      }

      const foundTagToBeDeleted = await this.prisma.tag.findUnique({
        where: { id: tagId },
      });

      if (!foundTagToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Tag with the provided data.',
        );
      }

      const deletedTag = await this.prisma.tag.delete({ where: { id: tagId } });

      if (!deletedTag) {
        throw new BadRequestException(
          'Could not delete Tag with the provided information.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'tags',
        [
          {
            label: 'userId',
            value: deletedTag.userId,
          },
        ],
        'modify',
      );

      return {
        message: `Successfully deleted Tag named ${deletedTag.title}!`,
        tag: deletedTag,
      };
    } catch (error) {
      throw error;
    }
  }
}
