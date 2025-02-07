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
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  DeleteUserQueryParams,
  UserFindUniqueObject,
  UserWhereUniqueObject,
} from '../types';

@Injectable()
export class DeleteUserService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async deleteUser(
    queryParams: DeleteUserQueryParams,
    uniqueIdentifier: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!uniqueIdentifier) {
        throw new BadRequestException(
          'No unique identifier(id, email) provided.',
        );
      }

      const {
        includeValues,
        selectValues,
        chosenOptionType,
        uniqueIdentifierType,
      } = queryParams;

      const deleteObject: UserFindUniqueObject = {
        where: {
          [uniqueIdentifierType]: uniqueIdentifier,
        } as unknown as UserWhereUniqueObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'user',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        deleteObject[chosenOptionType] = optionObject;
      }

      const foundUserToBeDeleted = await this.prisma.user.findFirst({
        where: {
          [uniqueIdentifierType]: uniqueIdentifier,
        },
      });

      if (!foundUserToBeDeleted) {
        throw new NotFoundException(
          'Could not find any users with the provided unique identifier.',
        );
      }

      const deletedUser = await this.prisma.user.delete(deleteObject);

      if (!deletedUser) {
        throw new BadRequestException(
          'Could not delete user with the data provided.',
        );
      }

      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: '',
        specifiers: [
          { label: 'userId', value: deletedUser.id },
          { label: 'email', value: deletedUser.email },
        ],
        type: 'modify',
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'DELETE',
        entity: deletedUser,
        message: `Successfully deleted user named ${deletedUser.username}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
