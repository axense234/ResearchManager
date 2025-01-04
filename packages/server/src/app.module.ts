// Nest
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
// Modules
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ResearchActivityModule } from './research/activity/activity.module';
import { ResearchPhaseModule } from './research/phase/phase.module';
import { ResearchLogModule } from './research/log/log.module';
import { ResearchSessionModule } from './research/session/session.module';
import { TagModule } from './tag/tag.module';
import { SettingModule } from './setting/setting.module';
import { ActivityFeedModule } from './activity/feed/feed.module';
import { ActivityDayModule } from './activity/day/day.module';
import { ActivityLogModule } from './activity/log/log.module';
// Config Module
import { ConfigModule } from '@nestjs/config';
// Db Modules
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
// Middleware
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    ResearchActivityModule,
    TagModule,
    SettingModule,
    ResearchPhaseModule,
    ResearchLogModule,
    ResearchSessionModule,
    ActivityFeedModule,
    ActivityDayModule,
    ActivityLogModule,
    RedisModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '/users/profile', method: RequestMethod.GET });
  }
}
