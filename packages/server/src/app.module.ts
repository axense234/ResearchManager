// Nest
import { Module } from '@nestjs/common';
// Modules
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ResearchActivityModule } from './research/activity/researchActivity.module';
import { ResearchPhaseModule } from './research/phase/researchPhase.module';
import { ResearchLogModule } from './research/log/researchLog.module';
import { ResearchSessionModule } from './research/session/researchSession.module';
import { TagModule } from './tag/tag.module';
import { SettingModule } from './setting/setting.module';
// Config Module
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    PrismaModule,
    TagModule,
    SettingModule,
    ResearchActivityModule,
    ResearchPhaseModule,
    ResearchLogModule,
    ResearchSessionModule,
  ],
})
export class AppModule {}
