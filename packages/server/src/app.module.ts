// Nest
import { Module } from '@nestjs/common';
// Modules
import { UserModule } from './modules/entity/user/user.module';
import { AuthModule } from './modules/entity/auth/auth.module';
import { ResearchActivityModule } from './modules/entity/research/activity/activity.module';
import { ResearchPhaseModule } from './modules/entity/research/phase/phase.module';
import { ResearchLogModule } from './modules/entity/research/log/log.module';
import { ResearchSessionModule } from './modules/entity/research/session/session.module';
import { TagModule } from './modules/entity/tag/tag.module';
import { SettingModule } from './modules/entity/settings/settings.module';
import { ActivityFeedModule } from './modules/entity/activity/feed/feed.module';
import { ActivityDayModule } from './modules/entity/activity/day/day.module';
import { ActivityLogModule } from './modules/entity/activity/log/log.module';
import { ObjectBuilderModule } from './modules/util/builder/builder.module';
import { HealthModule } from './modules/util/health/health.module';
// Config Module
import { ConfigModule } from '@nestjs/config';
// Db Modules
import { PrismaModule } from './modules/db/prisma/prisma.module';
import { RedisModule } from './modules/db/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ObjectBuilderModule,
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
    HealthModule,
  ],
})
export class AppModule {}
