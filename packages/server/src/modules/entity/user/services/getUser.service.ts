// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { User } from '@prisma/client';
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';

@Injectable()
export class GetUserService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getUser(userId: string, url: string) {
    try {
      if (!userId) {
        throw new BadRequestException('No User Id provided!');
      }

      const foundUser = (await this.redis.getOrSetCache(url, async () => {
        const user = await this.prisma.user.findUnique({
          where: { id: userId },
        });

        return user;
      })) as User;

      if (!foundUser) {
        throw new NotFoundException(
          'Could not find any users with the provided information.',
        );
      }

      return {
        message: `Successfully found user: ${foundUser.username}`,
        user: foundUser,
      };
    } catch (error) {
      throw error;
    }
  }
}
