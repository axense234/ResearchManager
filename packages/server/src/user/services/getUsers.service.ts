// NestJS
import { Injectable } from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/redis.service';

@Injectable()
export class GetUsersService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async getUsers(url: string) {
    try {
      const foundUsers = await this.redis.getOrSetCache(url, async () => {
        const users = await this.prisma.user.findMany({});
        return users;
      });

      if (foundUsers.length < 1) {
        return {
          nbHits: 0,
          message: 'No Users found given the input.',
          users: [],
        };
      }

      return {
        nbHits: foundUsers.length,
        message: `Successfully found ${foundUsers.length} Users given the input!`,
        users: foundUsers,
      };
    } catch (error) {
      throw error;
    }
  }
}
