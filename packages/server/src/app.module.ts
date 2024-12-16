// Nest
import { Module } from '@nestjs/common';
// Modules
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ResearchActivityModule } from './researchActivity/researchActivity.module';
import { ResearchPhaseModule } from './researchPhase/researchPhase.module';
import { ResearchLogModule } from './researchLog/researchLog.module';
import { ResearchSessionModule } from './researchSession/researchSession.module';
// Config Module
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    PrismaModule,
    ResearchActivityModule,
    ResearchPhaseModule,
    ResearchLogModule,
    ResearchSessionModule,
  ],
})
export class AppModule {}
