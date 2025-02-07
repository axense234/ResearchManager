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
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: string; email: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: payload.email },
      include: {
        activityFeeds: true,
        archivedResearchActivities: true,
        archivedResearchLogs: true,
        archivedResearchPhases: true,
        archivedResearchSessions: true,
        archivedTags: true,
        researchActivities: true,
        settings: true,
        tags: true,
      },
    });

    delete user.hash;
    return user;
  }
}
