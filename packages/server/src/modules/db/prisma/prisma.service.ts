// Nest
import { Injectable } from '@nestjs/common';
// Prisma Client
import { PrismaClient } from '@prisma/client';
// Config
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(public configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.get('DATABASE_URL'),
        },
      },
    });
  }
}
