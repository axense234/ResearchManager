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

      const foundTag = await this.redis.GetOrSetCacheService.getOrSetCache(
        url,
        async () => {
          const tag = await this.prisma.tag.findUnique({
            where: { id: tagId },
          });
          return tag;
        },
      );

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
