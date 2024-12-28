// Nest
import { Injectable } from '@nestjs/common';
// Redis
import { RedisService } from 'src/redis/services/index.service';

@Injectable()
export class LogOutService {
  constructor(private redis: RedisService) {}

  async logOut(userId: string) {
    try {
      await this.redis.DeleteAllCacheThatIncludesGivenKeysService.deleteAllCacheThatIncludesGivenKeys(
        '/',
        [{ label: 'userId', value: userId }],
        'modify',
      );
    } catch (error) {
      throw error;
    }
  }
}
