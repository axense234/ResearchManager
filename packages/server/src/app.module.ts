// Nest
import { Module } from '@nestjs/common';
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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    TagModule,
    SettingModule,
    ResearchActivityModule,
    ResearchPhaseModule,
    ResearchLogModule,
    ResearchSessionModule,
    ActivityFeedModule,
    ActivityDayModule,
    ActivityLogModule,
    PrismaModule,
    RedisModule,
  ],
})
export class AppModule {}
