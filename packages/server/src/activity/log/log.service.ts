// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateActivityLogDto, UpdateActivityLogDto } from './dto';

@Injectable()
export class ActivityLogService {
  constructor(private prisma: PrismaService) {}

  async getActivityLogs() {
    try {
      const foundActivityLogs = await this.prisma.activityLog.findMany({});

      if (foundActivityLogs.length < 1) {
        return {
          nbHits: 0,
          message: 'Could not find any Activity Logs matching the given data.',
          activityLogs: [],
        };
      }

      return {
        nbHits: foundActivityLogs.length,
        message: `Successfully found ${foundActivityLogs.length} Activity Logs!`,
        activityLogs: foundActivityLogs,
      };
    } catch (error) {
      throw error;
    }
  }

  async getActivityLog(activityLogId: string) {
    try {
      if (!activityLogId) {
        throw new BadRequestException('Please provide an Activity Log Id!');
      }

      const foundActivityLog = await this.prisma.activityLog.findUnique({
        where: { id: activityLogId },
      });

      if (!foundActivityLog) {
        throw new NotFoundException(
          'Could not find any Activity Log matching the given data.',
        );
      }

      return {
        message: `Successfully found Activity Log!`,
        activityLog: foundActivityLog,
      };
    } catch (error) {
      throw error;
    }
  }

  async createActivityLog(dto: CreateActivityLogDto) {
    try {
      const createdActivityLog = await this.prisma.activityLog.create({
        data: { ...dto },
      });

      if (!createdActivityLog) {
        throw new BadRequestException(
          'Could not create Activity Log with the provided information.',
        );
      }

      return {
        message: `Successfully created Activity Log!`,
        activityLog: createdActivityLog,
      };
    } catch (error) {
      throw error;
    }
  }

  async updateActivityLog(dto: UpdateActivityLogDto, activityLogId: string) {
    try {
      if (!activityLogId) {
        throw new BadRequestException('No Activity Log Id provided.');
      }

      const foundActivityLogToUpdated =
        await this.prisma.activityLog.findUnique({
          where: { id: activityLogId },
        });

      if (!foundActivityLogToUpdated) {
        throw new NotFoundException(
          'Could not find any Activity Log to be updated with the provided information.',
        );
      }

      const updatedActivityLog = await this.prisma.activityLog.update({
        where: { id: activityLogId },
        data: { ...dto },
      });

      if (!updatedActivityLog) {
        throw new BadRequestException(
          'Could not update Activity Log with the provided information.',
        );
      }

      return {
        message: `Successfully updated Activity Log!`,
        activityLog: updatedActivityLog,
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteActivityLog(activityLogId: string) {
    try {
      if (!activityLogId) {
        throw new BadRequestException('No Activity Log Id provided.');
      }

      const foundActivityLogToBeDeleted =
        await this.prisma.activityLog.findUnique({
          where: { id: activityLogId },
        });

      if (!foundActivityLogToBeDeleted) {
        throw new NotFoundException(
          'Could not find any Activity Log matching the given data.',
        );
      }

      const deletedActivityLog = await this.prisma.activityLog.delete({
        where: { id: activityLogId },
      });

      if (!deletedActivityLog) {
        throw new BadRequestException(
          'Could not delete Activity Log with the given data.',
        );
      }

      return {
        message: `Successfully deleted Activity Log!`,
        activityLog: deletedActivityLog,
      };
    } catch (error) {
      throw error;
    }
  }
}
