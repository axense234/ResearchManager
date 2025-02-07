// Nest
import { Injectable } from '@nestjs/common';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';
// Types
import { LogOutQueryParams } from '../types';

@Injectable()
export class LogOutService {
  constructor(private redis: RedisService) {}

  async logOut(queryParams: LogOutQueryParams) {
    try {
      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: '/',
        specifiers: [
          { label: 'userId', value: queryParams.userId },
          { label: 'email', value: queryParams.email },
        ],
        type: 'modify',
      });
    } catch (error) {
      throw error;
    }
  }
}
