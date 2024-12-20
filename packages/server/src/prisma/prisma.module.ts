// Nest
import { Global, Module } from '@nestjs/common';
// Prisma
import { PrismaService } from './prisma.service';
@Global()
@Module({
  exports: [PrismaService],
  providers: [PrismaService],
})
export class PrismaModule {}
