// NestJS
import { Injectable } from '@nestjs/common';
// Passport Stuff
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
// Services
import { PrismaService } from 'src/modules/db/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    public config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: string; email: string }) {
    const userById = await this.prisma.user.findUnique({
      where: { id: payload.sub },
    });

    if (userById) {
      return userById;
    }

    const userByEmail = await this.prisma.user.findUnique({
      where: { email: payload.email },
    });

    if (userByEmail) {
      return userByEmail;
    }
  }
}
