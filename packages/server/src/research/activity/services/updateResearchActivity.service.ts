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
// Dtos
import { UpdateResearchActivityDto } from '../dto';

@Injectable()
export class UpdateResearchActivityService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

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

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'researchActivities',
        [{ label: 'userId', value: updatedResearchActivity.userId }],
        'modify',
      );

      return {
        message: `Successfully updated Research Activity named ${updatedResearchActivity.name}!`,
        researchActivity: updatedResearchActivity,
      };
    } catch (error) {
      throw error;
    }
  }
}
