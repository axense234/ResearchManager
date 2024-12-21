// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Dto
import { CreateResearchActivityDto, UpdateResearchActivityDto } from './dto';
// Caching with Redis
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class ResearchActivityService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getResearchActivity(researchActivityId: string, url: string) {
    try {
      if (!researchActivityId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchActivity = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchActivity =
            await this.prisma.researchActivity.findUnique({
              where: { id: researchActivityId },
            });
          return researchActivity;
        },
      );

      if (!foundResearchActivity) {
        throw new NotFoundException(
          'Could not find any Research Activity with the provided id.',
        );
      }

      return {
        message: `Successfully found Research Activity: ${foundResearchActivity.name}!`,
        researchActivity: foundResearchActivity,
      };
    } catch (error) {
      throw error;
    }
  }

  async getResearchActivities(userId?: string, url?: string) {
    try {
      const foundResearchActivities = await this.redis.getOrSetCache(
        url,
        async () => {
          const researchActivities =
            await this.prisma.researchActivity.findMany({
              where: { AND: [{ userId }] },
            });
          return researchActivities;
        },
      );

      if (foundResearchActivities.length < 1) {
        return {
          nbHits: 0,
          message: 'No Research Activities found given the input.',
          researchActivities: [],
        };
      }

      return {
        nbHits: foundResearchActivities.length,
        message: `Successfully found ${foundResearchActivities.length} Research Activities given the input!`,
        researchActivities: foundResearchActivities,
      };
    } catch (error) {
      throw error;
    }
  }

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

      await this.redis.handleCacheMutation(
        'researchActivities',
        createdResearchActivity.userId,
      );

      return {
        message: `Successfully created Research Activity: ${createdResearchActivity.name}!`,
        researchActivity: createdResearchActivity,
      };
    } catch (error) {
      throw error;
    }
  }

  async updateResearchActivity(
    dto: UpdateResearchActivityDto,
    researchActivityId: string,
  ) {
    try {
      if (!researchActivityId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchActivityToBeUpdated =
        await this.prisma.researchActivity.findUnique({
          where: { id: researchActivityId },
        });

      if (!foundResearchActivityToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Research Activities to be updated with the given id.',
        );
      }

      const updatedResearchActivity = await this.prisma.researchActivity.update(
        { where: { id: researchActivityId }, data: { ...dto } },
      );

      if (!updatedResearchActivity) {
        throw new BadRequestException(
          'Could not update Research Activity with the provided information.',
        );
      }

      await this.redis.handleCacheMutation(
        'researchActivities',
        updatedResearchActivity.userId,
        updatedResearchActivity.id,
      );

      return {
        message: `Successfully updated Research Activity named ${updatedResearchActivity.name}!`,
        researchActivity: updatedResearchActivity,
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteResearchActivity(researchActivityId: string) {
    try {
      if (!researchActivityId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchActivityToBeDeleted =
        await this.prisma.researchActivity.findUnique({
          where: { id: researchActivityId },
        });

      if (!foundResearchActivityToBeDeleted) {
        throw new NotFoundException(
          'Could not find Research Activity to be deleted with the given id.',
        );
      }

      const deletedResearchActivity = await this.prisma.researchActivity.delete(
        { where: { id: researchActivityId } },
      );

      if (!deletedResearchActivity) {
        throw new BadRequestException(
          'Could not delete Research Activity with the data provided.',
        );
      }

      await this.redis.handleCacheMutation(
        'researchActivities',
        deletedResearchActivity.userId,
        deletedResearchActivity.id,
      );

      return {
        message: `Successfully deleted Research Activity named ${deletedResearchActivity.name}!`,
        researchActivity: deletedResearchActivity,
      };
    } catch (error) {
      throw error;
    }
  }
}
