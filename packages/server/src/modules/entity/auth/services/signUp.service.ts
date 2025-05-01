// Nest
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
// Auth
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
// Dtos
import { SignUpDto } from '@researchmanager/shared/types';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Services
import { SignTokenService } from './signToken.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { SignUpQueryParams } from '../types';
import { UserCreateDataObject } from '../types/object/UserCreateDataObject';
import { UserCreateObject } from '../types/object/UserCreateObject';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class SignUpService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
    private signTokenService: SignTokenService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async signUp(
    queryParams: SignUpQueryParams,
    dto: SignUpDto,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
    try {
      const {
        includeValues,
        selectValues,
        chosenOptionType,
        createSettings,
        createActivityFeed,
        createDefaultTags,
      } = queryParams;

      const dataObject = (await this.objectBuilder.buildDataObject({
        dto,
        entityType: 'user',
        actionType: 'CREATE',
        options: { createActivityFeed, createSettings, createDefaultTags },
      })) as UserCreateDataObject;

      const createObject: UserCreateObject = { data: dataObject };

      const { optionObject, additionalNotes } =
        this.objectBuilder.buildOptionObject({
          entityType: 'user',
          chosenOptionType,
          includeValues,
          selectValues,
        });

      if (chosenOptionType && optionObject) {
        createObject[chosenOptionType] = optionObject;
      }

      const createdUser = await this.prisma.user.create(createObject);

      if (!createdUser) {
        throw new BadRequestException(
          'Could not create user with the data provided.',
        );
      }

      const jwtResponse = await this.signTokenService.signToken(
        createdUser.id,
        createdUser.email,
      );

      await this.redis.deleteCacheDeep({
        entityType: 'user',
        base: 'users',
        actionType: 'CREATE',
        specifiers: [],
      });

      return await this.objectBuilder.buildReturnObject({
        actionType: 'CREATE',
        message: `Successfully created user ${createdUser.username}!`,
        entity: createdUser,
        entityType: 'user',
        access_token: jwtResponse.access_token,
        additionalNotes,
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ForbiddenException('Credentials taken.');
      } else {
        throw error;
      }
    }
  }
}
