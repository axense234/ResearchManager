// Nest
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// JWT
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import JwtResponse from './jwt/auth.jwt';
// Prisma
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
// Auth
import AuthDto from './dto/auth.dto';
// Argon
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signToken(userId: string, email: string): Promise<JwtResponse> {
    try {
      const payload = { sub: userId, email };

      const signinConfig: JwtSignOptions = {
        secret: this.config.get('JWT_SECRET'),
        expiresIn: this.config.get('JWT_EXP'),
      };

      const jwtResponse = await this.jwt.signAsync(payload, signinConfig);

      if (!jwtResponse) {
        throw new BadRequestException(
          'Could not create JWT. Invalid userId or email.',
        );
      }

      return {
        message: 'Successfully generated token!',
        access_token: jwtResponse,
      };
    } catch (error) {
      throw error;
    }
  }

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

      const jwtResponse = await this.signToken(
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

  async signIn(dto: AuthDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (!user) {
        throw new NotFoundException(
          'Could not find an user with such an email.',
        );
      }

      const arePasswordsMatching = await argon.verify(user.hash, dto.password);

      if (!arePasswordsMatching) {
        throw new UnauthorizedException('Passwords do not match.');
      }

      const jwtResponse = await this.signToken(user.id, user.email);
      delete user.hash;

      return {
        message: `Welcome back, ${user.username}, you have successfully signed in!`,
        user,
        access_token: jwtResponse.access_token,
      };
    } catch (error) {
      throw error;
    }
  }

  async logOut() {
    try {
      // when setup with redis, add an eventual userid param so we can delete everything associated with it from cache
    } catch (error) {
      throw error;
    }
  }
}
