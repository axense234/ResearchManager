// NestJS
import { Injectable, NotFoundException } from '@nestjs/common';
// Prisma
// Types
import {
  GetUserQueryParams,
  UserFindUniqueObject,
  UserWhereUniqueObject,
} from '../types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';
// Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
import { RedisService } from 'src/modules/db/redis/services/redis.service';
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';

@Injectable()
export class GetProfileService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async getProfile(
    userId: string,
    queryParams: GetUserQueryParams,
    url: string,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const { includeValues, selectValues, chosenOptionType, includeDepth } =
        queryParams;

      const findUniqueObject: UserFindUniqueObject = {
        where: {
          id: userId,
        } as unknown as UserWhereUniqueObject,
      };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          chosenOptionType,
          entityType: 'user',
          includeValues,
          selectValues,
          includeDepth: Number(includeDepth),
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

      return await this.objectBuilder.buildReturnObject({
        actionType: 'GET PROFILE',
        entity: foundUser,
        message: `Successfully found user: ${foundUser.username}`,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
