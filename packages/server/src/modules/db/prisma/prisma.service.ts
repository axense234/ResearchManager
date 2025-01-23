// Nest
import { Injectable } from '@nestjs/common';
// Config
import { ConfigService } from '@nestjs/config';
// Prisma Client
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }
}
