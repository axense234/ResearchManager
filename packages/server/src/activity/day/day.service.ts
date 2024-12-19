// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDayActivityDto, UpdateDayActivityDto } from './dto/day.dto';

@Injectable()
export class DayActivityService {
  constructor(private prisma: PrismaService) {}

  async getDayActivities(activityFeedId?: string) {
    try {
      const foundDayActivities = await this.prisma.dayActivity.findMany({
        where: { AND: [{ activityFeedId }] },
      });

      if (foundDayActivities.length < 1) {
        return {
          nbHits: 0,
          message: 'Could not find any Day Activities given the data.',
          dayActivities: [],
        };
      }

      return {
        nbHits: foundDayActivities.length,
        message: `Successfully found ${foundDayActivities.length} Day Activities given the data`,
        dayActivities: foundDayActivities,
      };
    } catch (error) {
      throw error;
    }
  }

  async getDayActivity(dayActivityId: string) {
    try {
      if (!dayActivityId) {
        throw new BadRequestException('No Day Activity Id provided.');
      }

      const foundDayActivity = await this.prisma.dayActivity.findUnique({
        where: { id: dayActivityId },
      });

      if (!foundDayActivity) {
        throw new NotFoundException(
          'Could not find any Day Activity matching the provided information.',
        );
      }

      return {
        message: `Successfully found Day Activity!`,
        dayActivity: foundDayActivity,
      };
    } catch (error) {
      throw error;
    }
  }

  async createDayActivity(dto: CreateDayActivityDto) {
    try {
      const createdDayActivity = await this.prisma.dayActivity.create({
        data: { ...dto },
      });

      if (!createdDayActivity) {
        throw new BadRequestException(
          'Could not create Day Activity with the data provided.',
        );
      }

      return {
        message: `Successfully created Day Activity!`,
        dayActivity: createdDayActivity,
      };
    } catch (error) {
      throw error;
    }
  }

  async updateDayActivity(dto: UpdateDayActivityDto, dayActivityId: string) {
    try {
      if (!dayActivityId) {
        throw new BadRequestException('No Day Activity Id provided.');
      }

      const foundDayActivityToBeUpdated =
        await this.prisma.dayActivity.findUnique({
          where: { id: dayActivityId },
        });

      if (!foundDayActivityToBeUpdated) {
        throw new NotFoundException(
          'Could not find any Day Activity to be updated with the given data.',
        );
      }

      const updatedDayActivity = await this.prisma.dayActivity.update({
        where: { id: dayActivityId },
        data: { ...dto },
      });

      if (!updatedDayActivity) {
        throw new BadRequestException(
          'Could not update Day Activity with the given data.',
        );
      }

      return {
        message: `Successfully updated Day Activity!`,
        dayActivity: updatedDayActivity,
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteDayActivity(dayActivityId: string) {
    try {
      if (!dayActivityId) {
        throw new BadRequestException('No Day Activity Id provided.');
      }

      const foundDayActivityToBeDeleted =
        await this.prisma.dayActivity.findUnique({
          where: { id: dayActivityId },
        });

      if (!foundDayActivityToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Day Activity with the given data.',
        );
      }

      const deletedDayActivity = await this.prisma.dayActivity.delete({
        where: { id: dayActivityId },
      });

      if (!deletedDayActivity) {
        throw new BadRequestException(
          'Could not delete Day Activity with the provided information.',
        );
      }

      return {
        message: `Successfully deleted Day Activity!`,
        dayActivity: deletedDayActivity,
      };
    } catch (error) {
      throw error;
    }
  }
}
