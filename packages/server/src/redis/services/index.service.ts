// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { GetOrSetCacheService } from './getOrSetCache.service';
import { DeleteAllCacheThatIncludesGivenKeysService } from './deleteAllCacheThatIncludesGivenKeys.service';

@Injectable()
export class RedisService {
  constructor(
    public GetOrSetCacheService: GetOrSetCacheService,
    public DeleteAllCacheThatIncludesGivenKeysService: DeleteAllCacheThatIncludesGivenKeysService,
  ) {}
}
