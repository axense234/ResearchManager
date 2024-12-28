// Nest
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
// Auth
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
// Dtos
import AuthDto from '../dto/auth.dto';
// Argon
import * as argon from 'argon2';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Services
import { SignTokenService } from './signToken.service';

@Injectable()
export class SignUpService {
  constructor(
    private prisma: PrismaService,
    private signTokenService: SignTokenService,
  ) {}

  async signUp(dto: AuthDto) {
    try {
      const hash = await argon.hash(dto.password);
      delete dto.password;

      const createdUser = await this.prisma.user.create({
        data: { ...dto, hash },
      });

      if (!createdUser) {
        throw new BadRequestException(
          'Could not create user with the data provided.',
        );
      }

      const jwtResponse = await this.signTokenService.signToken(
        createdUser.id,
        createdUser.email,
      );
      delete createdUser.hash;

      return {
        message: `Successfully created user ${createdUser.username}!`,
        user: createdUser,
        access_token: jwtResponse.access_token,
      };
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
