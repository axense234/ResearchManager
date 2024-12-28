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
import { UpdateResearchPhaseDto } from '../dto';

@Injectable()
export class UpdateResearchPhaseService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async updateResearchPhase(
    dto: UpdateResearchPhaseDto,
    researchPhaseId: string,
  ) {
    try {
      if (!researchPhaseId) {
        throw new BadRequestException('No Research Activity Id provided.');
      }

      const foundResearchPhaseToBeUpdated =
        await this.prisma.researchPhase.findUnique({
          where: { id: researchPhaseId },
        });

      if (!foundResearchPhaseToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Research Phase matching the provided id.',
        );
      }

      const updatedResearchPhase = await this.prisma.researchPhase.update({
        where: { id: researchPhaseId },
        data: { ...dto },
      });

      if (!updatedResearchPhase) {
        throw new BadRequestException(
          'Could not update Research Phase with the provided data.',
        );
      }

      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        'researchPhases',
        [
          {
            label: 'userId',
            value: updatedResearchPhase.userIdForArchivePurposes,
          },
          {
            label: 'researchActivityId',
            value: updatedResearchPhase.researchActivityId,
          },
        ],
        'modify',
      );

      return {
        message: `Successfully updated Research Phase named ${updatedResearchPhase.name}!`,
        researchPhase: updatedResearchPhase,
      };
    } catch (error) {
      throw error;
    }
  }
}
