// NestJS
import { Injectable } from '@nestjs/common';
// Types
import { ReturnObjectBuilderParams } from '../types/return/ReturnObjectBuilderParams';
import { ReturnObjectBuilderReturnObject } from '../types';

@Injectable()
export class ReturnObjectBuilderService {
  constructor() {}

  buildReturnObject({
    actionType,
    entity,
    message,
    additionalNotes,
    nbHits,
  }: ReturnObjectBuilderParams): ReturnObjectBuilderReturnObject {
    const returnObject: ReturnObjectBuilderReturnObject = {};

    if (actionType === 'GET MULTIPLE' && nbHits) {
      returnObject.nbHits = nbHits;
    }

    returnObject.message = message;

    if (
      (actionType === 'GET MULTIPLE' && additionalNotes?.length > 0) ||
      (actionType !== 'GET MULTIPLE' && additionalNotes)
    ) {
      returnObject.notes = additionalNotes;
    }

    returnObject.payload = entity;

    return returnObject;
  }
}
