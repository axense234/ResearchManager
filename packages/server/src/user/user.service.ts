// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
// DTO
import UpdateUserDto from './dto/user.dto';
// Password hashing
import * as argon from 'argon2';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getProfile(user: User) {
    try {
      // will have to add some more redis functionality here but for now this is fine
      return { message: `Successfully found user ${user.username}.`, user };
    } catch (error) {
      throw error;
    }
  }

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

      return {
        message: `Successfully updated user ${updatedUser.username}!`,
        user: updatedUser,
      };
    } catch (error) {
      throw error;
    }
  }

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

      return {
        message: `Successfully deleted user named ${deletedUser.username}!`,
        user: deletedUser,
      };
    } catch (error) {
      throw error;
    }
  }
}
