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
  GetUserQueryParams,
  UserFindUniqueObject,
  UserWhereUniqueObject,
} from '../types';

@Injectable()
export class GetUserService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getUser(
    queryParams: GetUserQueryParams,
    uniqueIdentifier: string,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      if (!uniqueIdentifier) {
        throw new BadRequestException('No unique identifier provided!');
      }

      const {
        includeValues,
        selectValues,
        chosenOptionType,
        uniqueIdentifierType,
      } = queryParams;

      const findUniqueObject: UserFindUniqueObject = {
        where: {
          [uniqueIdentifierType]: uniqueIdentifier,
        } as unknown as UserWhereUniqueObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          chosenOptionType,
          entityType: 'user',
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        findUniqueObject[chosenOptionType] = optionObject;
      }

      const foundUser = await this.redis.getOrSetCache(url, async () => {
        const user = await this.prisma.user.findUnique(findUniqueObject);
        return user;
      });

      if (!foundUser) {
        throw new NotFoundException(
          'Could not find any users with the provided information.',
        );
      }

      return this.objectBuilder.buildReturnObject({
        actionType: 'GET SINGLE',
        entity: foundUser,
        message: `Successfully found user: ${foundUser.username}`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
