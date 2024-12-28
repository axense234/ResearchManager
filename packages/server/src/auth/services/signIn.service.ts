// Nest
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
// Dtos
import AuthDto from '../dto/auth.dto';
// Argon
import * as argon from 'argon2';
// Prisma
import { PrismaService } from 'src/prisma/prisma.service';
// Services
import { SignTokenService } from './signToken.service';

@Injectable()
export class SignInService {
  constructor(
    private prisma: PrismaService,
    private signTokenService: SignTokenService,
  ) {}

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

      const jwtResponse = await this.signTokenService.signToken(
        user.id,
        user.email,
      );
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
}
