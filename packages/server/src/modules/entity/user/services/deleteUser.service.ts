// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';

@Injectable()
export class DeleteUserService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async deleteUser(userId: string) {
    try {
      if (!userId) {
        throw new BadRequestException('No userId provided.');
      }

      const foundUserToBeDeleted = await this.prisma.user.findUnique({
        where: { id: userId },
      });

      if (!foundUserToBeDeleted) {
        throw new NotFoundException(
          'Could not find any users with the provided id.',
        );
      }

      const deletedUser = await this.prisma.user.delete({
        where: { id: userId },
      });

      if (!deletedUser) {
        throw new BadRequestException(
          'Could not delete user with the data provided.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: '',
        specifiers: [{ label: 'userId', value: deletedUser.id }],
        type: 'modify',
      });

      return {
        message: `Successfully deleted user named ${deletedUser.username}!`,
        user: deletedUser,
      };
    } catch (error) {
      throw error;
    }
  }
}
