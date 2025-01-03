// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/redis.service';
// Dtos
import { UpdateTagDto } from '../dto';

@Injectable()
export class UpdateTagService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async updateTag(dto: UpdateTagDto, tagId: string) {
    try {
      if (!tagId) {
        throw new BadRequestException('No Tag Id provided.');
      }

      const foundTagToBeUpdated = await this.prisma.tag.findUnique({
        where: { id: tagId },
      });

      if (!foundTagToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Tag to update with the given data.',
        );
      }

      const updatedTag = await this.prisma.tag.update({
        where: { id: tagId },
        data: { ...dto },
      });

      if (!updatedTag) {
        throw new BadRequestException(
          'Could not update Tag with the provided data.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'tags',
        specifiers: [
          {
            label: 'userId',
            value: updatedTag.userId,
          },
        ],
        type: 'modify',
      });

      return {
        message: `Successfully updated Tag named ${updatedTag.title}!`,
        tag: updatedTag,
      };
    } catch (error) {
      throw error;
    }
  }
}
