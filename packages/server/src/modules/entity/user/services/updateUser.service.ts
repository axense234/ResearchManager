// NestJS
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import type { UpdateUserDto } from '@researchmanager/shared/types';
import {
  UpdateUserQueryParams,
  UserUpdateDataObject,
  UserUpdateObject,
  UserWhereUniqueObject,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class UpdateUserService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async updateUser(
    queryParams: UpdateUserQueryParams,
    dto: UpdateUserDto,
    uniqueIdentifier: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      if (!uniqueIdentifier) {
        throw new BadRequestException('No unique identifier provided.');
      }

      const {
        includeValues,
        selectValues,
        chosenOptionType,
        uniqueIdentifierType,
      } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        dto,
        entityType: 'user',
        actionType: 'UPDATE',
        options: {},
      })) as UserUpdateDataObject;

      const updateObject: UserUpdateObject = {
        where: {
          [uniqueIdentifierType]: uniqueIdentifier,
        } as unknown as UserWhereUniqueObject,
        data: dataObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'user',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        updateObject[chosenOptionType] = optionObject;
      }

      const foundUserToBeUpdated = await this.prisma.user.findFirst({
        where: { [uniqueIdentifierType]: uniqueIdentifier },
      });

      if (!foundUserToBeUpdated) {
        throw new NotFoundException(
          'Could not find users with the unique identifier provided.',
        );
      }

      const updatedUser = await this.prisma.user.update(updateObject);

      if (!updatedUser) {
        throw new BadRequestException(
          'Could not update user with the data provided.',
        );
      }

      delete updatedUser.hash;
      await this.redis.deleteCacheDeep({
        entityType: 'user',
        base: 'users',
        actionType: 'UPDATE',
        specifiers: [],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedUser,
        message: `Successfully updated user ${updatedUser.username}!`,
        additionalNotes,
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ForbiddenException('Email taken by another User.');
      } else {
        throw error;
      }
    }
  }
}
