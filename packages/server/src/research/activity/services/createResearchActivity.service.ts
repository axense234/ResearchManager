// NestJS
import { BadRequestException, Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/redis.service';
// Dtos
import { CreateResearchActivityDto } from '../dto';

@Injectable()
export class CreateResearchActivityService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async createResearchActivity(dto: CreateResearchActivityDto) {
    try {
      const createdResearchActivity = await this.prisma.researchActivity.create(
        { data: { ...dto } },
      );

      if (!createdResearchActivity) {
        throw new BadRequestException(
          'Could not create Research Activity with the data provided.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: 'researchActivities',
        specifiers: [
          { label: 'userId', value: createdResearchActivity.userId },
        ],
        type: 'create',
      });

      return {
        message: `Successfully created Research Activity: ${createdResearchActivity.name}!`,
        researchActivity: createdResearchActivity,
      };
    } catch (error) {
      throw error;
    }
  }
}
