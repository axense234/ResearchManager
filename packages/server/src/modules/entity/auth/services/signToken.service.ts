// Nest
import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// JWT
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
// Auth
import JwtResponse from '../jwt/auth.jwt';

@Injectable()
export class SignTokenService {
  constructor(
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
}
