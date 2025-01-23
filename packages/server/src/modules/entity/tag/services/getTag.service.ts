// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Tag } from '@prisma/client';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';

@Injectable()
export class GetTagService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getTag(tagId: string, url: string) {
    try {
      if (!tagId) {
        throw new BadRequestException('No Tag Id provided!');
      }

      const foundTag = (await this.redis.getOrSetCache(url, async () => {
        const tag = await this.prisma.tag.findUnique({
          where: { id: tagId },
        });
        return tag;
      })) as Tag;

      if (!foundTag) {
        throw new NotFoundException(
          'Could not find any Tag with the provided data.',
        );
      }

      return {
        message: `Successfully found Tag: ${foundTag.title}!`,
        tag: foundTag,
      };
    } catch (error) {
      throw error;
    }
  }
}
