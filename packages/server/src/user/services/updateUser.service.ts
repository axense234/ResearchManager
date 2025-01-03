// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Dtos
import UpdateUserDto from '../dto/user.dto';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Redis
import { RedisService } from 'src/redis/services/redis.service';
// Argon
import * as argon from 'argon2';

@Injectable()
export class UpdateUserService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async updateUser(dto: UpdateUserDto, userId: string) {
    try {
      if (!userId) {
        throw new BadRequestException('No userId provided.');
      }

      const foundUserToBeUpdated = await this.prisma.user.findUnique({
        where: { id: userId },
      });

      if (!foundUserToBeUpdated) {
        throw new NotFoundException(
          'Could not find users with the id / email provided.',
        );
      }

      if (dto.password) {
        dto.hash = await argon.hash(dto.password);
        delete dto.password;
      }

      const updatedUser = await this.prisma.user.update({
        where: { id: userId },
        data: { ...dto },
      });

      if (!updatedUser) {
        throw new BadRequestException(
          'Could not update user with the data provided.',
        );
      }

      delete updatedUser.hash;
      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: '',
        specifiers: [{ label: 'userId', value: updatedUser.id }],
        type: 'modify',
      });

      return {
        message: `Successfully updated user ${updatedUser.username}!`,
        user: updatedUser,
      };
    } catch (error) {
      throw error;
    }
  }
}
