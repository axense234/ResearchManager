// NestJS
import { Injectable } from '@nestjs/common';
// Util Service
// Util Func
import { entityTypeToPlural } from 'src/util/func/entityTypeToPlural';
// Types
import DeleteCacheDeepType from '../types/DeleteCacheDeep';
// Services
import { DeleteCacheShallowService } from './deleteCacheShallow.service';
// Util
import { chooseAllowedBuilderValues } from 'src/util/func/chooseAllowedBuilderValues';

@Injectable()
export class DeleteCacheDeepService {
  constructor(private deleteCacheShallowService: DeleteCacheShallowService) {}

  async deleteCacheDeep({
    entityType,
    base,
    actionType,
    specifiers,
    specifiersType = 'combined',
    deepCall = false,
  }: DeleteCacheDeepType) {
    // Shallow
    await this.deleteCacheShallowService.deleteCacheShallow({
      base,
      actionType,
      specifiers,
      specifiersType,
      deepCall,
    });

    // Deep
    const { allowedIncludeValues } = chooseAllowedBuilderValues(entityType);

    allowedIncludeValues.map((allowedIncludeValue) => {
      return this.deleteCacheShallowService.deleteCacheShallow({
        base: entityTypeToPlural(allowedIncludeValue),
        actionType: 'UPDATE',
        specifiersType: 'combined',
        deepCall: true,
        specifiers: [
          { label: 'includeValues', value: entityType },
          { label: 'chosenOptionType', value: 'include' },
        ],
      });
    });
  }
}
