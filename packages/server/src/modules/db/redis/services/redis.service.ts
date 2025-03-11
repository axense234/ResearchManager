// NestJS
import { Injectable } from '@nestjs/common';
// Types
import DeleteCacheType from '../types/DeleteCacheShallow';
import DeleteRelatedCacheType from '../types/DeleteCacheDeep';
// Services
import { GetOrSetCacheService } from './getOrSetCache.service';
import { DeleteCacheDeepService } from './deleteCacheDeep.service';
import { DeleteCacheShallowService } from './deleteCacheShallow.service';

@Injectable()
export class RedisService {
  constructor(
    private deleteCacheShallowService: DeleteCacheShallowService,
    private getOrSetCacheService: GetOrSetCacheService,
    private deleteCacheDeepService: DeleteCacheDeepService,
  ) {}

  async deleteCacheShallow({
    base,
    actionType,
    specifiers,
    specifiersType,
    deepCall,
  }: DeleteCacheType) {
    return await this.deleteCacheShallowService.deleteCacheShallow({
      base,
      actionType,
      specifiers,
      specifiersType,
      deepCall,
    });
  }

  async deleteCacheDeep({
    entityType,
    base,
    actionType,
    specifiers,
    specifiersType,
    deepCall,
  }: DeleteRelatedCacheType) {
    return await this.deleteCacheDeepService.deleteCacheDeep({
      entityType,
      base,
      actionType,
      specifiers,
      specifiersType,
      deepCall,
    });
  }

  async getOrSetCache(key: any, cb: any) {
    return await this.getOrSetCacheService.getOrSetCache(key, cb);
  }
}
