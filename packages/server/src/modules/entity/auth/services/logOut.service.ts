// Nest
import { Injectable } from '@nestjs/common';
// Redis
import { RedisService } from 'src/modules/db/redis/services/redis.service';

@Injectable()
export class LogOutService {
  constructor(private redis: RedisService) {}

  async logOut(userId: string) {
    try {
      await this.redis.deleteAllCacheThatIncludesGivenKeys({
        base: '/',
        specifiers: [{ label: 'userId', value: userId }],
        type: 'modify',
      });
    } catch (error) {
      throw error;
    }
  }
}
