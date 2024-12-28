// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/index.service';
// Dtos
import { CreateTagDto } from '../dto';

@Injectable()
export class CreateTagService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async createTag(dto: CreateTagDto) {
    try {
      const createdTag = await this.prisma.tag.create({
        data: { ...dto },
      });

      if (!createdTag) {
        throw new BadRequestException(
          'Could not create Tag with the data provided.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'tags',
        [
          {
            label: 'userId',
            value: createdTag.userId,
          },
        ],
        'create',
      );

      return {
        message: `Successfully created Tag named ${createdTag.title}!`,
        tag: createdTag,
      };
    } catch (error) {
      throw error;
    }
  }
}
