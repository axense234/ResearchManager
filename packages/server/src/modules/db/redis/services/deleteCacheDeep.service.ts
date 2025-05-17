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
import { AllowedIncludeValue } from 'src/modules/util/builder/types';

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

    const experimentalAllowedIncludeValues = [
      ...allowedIncludeValues,
      'users',
    ] as AllowedIncludeValue[];

    experimentalAllowedIncludeValues.map((allowedIncludeValue) => {
      return this.deleteCacheShallowService.deleteCacheShallow({
        base: entityTypeToPlural(allowedIncludeValue),
        actionType: 'UPDATE',
        specifiersType: 'combined',
        deepCall: true,
        specifiers: [
          {
            // I do not like how this works, it is basically a bandaid solution
            label: 'includeValues',
            possibleValues: [
              entityType,
              entityTypeToPlural(entityType),
              entityTypeToPlural(allowedIncludeValues[0]),
              'researchActivities',
            ],
          },
          { label: 'chosenOptionType', possibleValues: ['include'] },
        ],
      });
    });
  }
}
