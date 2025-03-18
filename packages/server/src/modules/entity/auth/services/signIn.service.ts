// Nest
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
// Dtos
import type { SignInDto } from '@researchmanager/shared/types';
// Argon
import * as argon from 'argon2';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Services
import { SignTokenService } from './signToken.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { SignInQueryParams } from '../types/params/SignInQueryParams';
import { ReturnObjectBuilderReturnObject } from 'src/modules/util/builder/types';
import { UserFindUniqueObject, UserWhereUniqueObject } from '../../user/types';

@Injectable()
export class SignInService {
  constructor(
    private prisma: PrismaService,
    private signTokenService: SignTokenService,
    private objectBuilder: ObjectBuilderService,
  ) {}

  async signIn(
    queryParams: SignInQueryParams,
    dto: SignInDto,
  ): Promise<ReturnObjectBuilderReturnObject> {
    try {
      const { includeValues, selectValues, chosenOptionType } = queryParams;

      const findUniqueObject: UserFindUniqueObject = {
        where: { email: dto.email } as unknown as UserWhereUniqueObject,
      };

      const foundUserForAuthentication =
        await this.prisma.user.findUnique(findUniqueObject);

      if (!foundUserForAuthentication) {
        throw new NotFoundException(
          'Could not find an user with such an email.',
        );
      }

      const arePasswordsMatching = await argon.verify(
        foundUserForAuthentication.hash,
        dto.password,
      );

      if (!arePasswordsMatching) {
        throw new UnauthorizedException('Passwords do not match.');
      }

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

      const foundUser = await this.prisma.user.findUnique(findUniqueObject);

      if (!foundUser) {
        throw new NotFoundException(
          'Something went incredibly wrong. The apocalypse is coming. Run while you can.',
        );
      }

      const jwtResponse = await this.signTokenService.signToken(
        foundUser.id,
        foundUser.email,
      );

      return this.objectBuilder.buildReturnObject({
        actionType: 'SIGNIN',
        entity: foundUser,
        entityType: 'user',
        message: `Welcome back, ${foundUser.username}, you have successfully signed in!`,
        access_token: jwtResponse.access_token,
        additionalNotes,
      });
    } catch (error) {
      throw error;
    }
  }
}
