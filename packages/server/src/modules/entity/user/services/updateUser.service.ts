// NestJS
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// Dtos
import UpdateUserDto from '../dto/user.dto';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import {
  UpdateUserQueryParams,
  UserUpdateDataObject,
  UserUpdateObject,
  UserWhereUniqueObject,
} from '../types';

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
  ): Promise<ReturnObjectBuilderReturnObject> {
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
      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: '',
        specifiers: [
          { label: 'userId', value: updatedUser.id },
          { label: 'email', value: updatedUser.email },
        ],
        type: 'modify',
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'UPDATE',
        entity: updatedUser,
        message: `Successfully updated user ${updatedUser.username}!`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
