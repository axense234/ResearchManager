// Nest
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
// Modules
import { UserModule } from './modules/entity/user/user.module';
import { AuthModule } from './modules/entity/auth/auth.module';
import { ResearchActivityModule } from './modules/entity/research/activity/activity.module';
import { ResearchPhaseModule } from './modules/entity/research/phase/phase.module';
import { ResearchLogModule } from './modules/entity/research/log/log.module';
import { ResearchSessionModule } from './modules/entity/research/session/session.module';
import { TagModule } from './modules/entity/tag/tag.module';
import { SettingModule } from './modules/entity/setting/setting.module';
import { ActivityFeedModule } from './modules/entity/activity/feed/feed.module';
import { ActivityDayModule } from './modules/entity/activity/day/day.module';
import { ActivityLogModule } from './modules/entity/activity/log/log.module';
import { ObjectBuilderModule } from './modules/util/builder/builder.module';
// Config Module
import { ConfigModule } from '@nestjs/config';
// Db Modules
import { PrismaModule } from './modules/db/prisma/prisma.module';
import { RedisModule } from './modules/db/redis/redis.module';
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
    ObjectBuilderModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: '/users/profile', method: RequestMethod.GET },
        { path: '/users', method: RequestMethod.DELETE },
      );
  }
}
