// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
// Dtos
import { SignInDto } from '@researchmanager/shared/types';
// Argon
import * as argon from 'argon2';
// Prisma
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
// Services
import { ConfigService } from '@nestjs/config';
import { SignTokenService } from './signToken.service';
// Object Builder
import { ObjectBuilderService } from 'src/modules/util/builder/services/builder.service';
// Types
import { SignInQueryParams } from '../types/params/SignInQueryParams';
import { UserFindUniqueObject, UserWhereUniqueObject } from '../../user/types';
import { ReturnObjectBuilderReturnObjectSwaggerWrapper } from 'src/modules/util/builder/data';

@Injectable()
export class SignInService {
  constructor(
    private prisma: PrismaService,
    private signTokenService: SignTokenService,
    private objectBuilder: ObjectBuilderService,
    private configService: ConfigService,
  ) {}

  async signIn(
    queryParams: SignInQueryParams,
    dto: SignInDto,
  ): Promise<ReturnObjectBuilderReturnObjectSwaggerWrapper> {
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

      if (
        foundUserForAuthentication.hash ===
        this.configService.get('OAUTH_PASSWORD_LABEL')
      ) {
        throw new BadRequestException(
          'Please sign in through Google or Github!',
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
