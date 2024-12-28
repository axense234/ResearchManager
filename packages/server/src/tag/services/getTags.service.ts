// NestJS
import { Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/index.service';

@Injectable()
export class GetTagsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getTags(userId: string, url: string) {
    try {
      const foundTags = await this.redis.GetOrSetCacheService.getOrSetCache(
        url,
        async () => {
          const tags = await this.prisma.tag.findMany({
            where: { AND: [{ userId }] },
          });
          return tags;
        },
      );

      if (foundTags.length < 1) {
        return {
          nbHits: 0,
          message: 'No Tags found given the input.',
          tags: [],
        };
      }

      return {
        nbHits: foundTags.length,
        message: `Successfully found ${foundTags.length} Tags given the input!`,
        tags: foundTags,
      };
    } catch (error) {
      throw error;
    }
  }
}
