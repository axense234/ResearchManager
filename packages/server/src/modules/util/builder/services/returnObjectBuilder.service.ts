// NestJS
import { Injectable } from '@nestjs/common';
// Types
import { ReturnObjectBuilderParams } from '../types/return/ReturnObjectBuilderParams';
import { ReturnObjectBuilderReturnObject } from '../types';
import { User } from '@prisma/client';

@Injectable()
export class ReturnObjectBuilderService {
  constructor() {}

  async buildReturnObject({
    actionType,
    entity,
    message,
    additionalNotes,
    nbHits,
    entityType,
    access_token,
  }: ReturnObjectBuilderParams): Promise<ReturnObjectBuilderReturnObject> {
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

    if (
      (actionType === 'CREATE' || actionType === 'SIGNIN') &&
      entityType === 'user'
    ) {
      returnObject.access_token = access_token;
      delete (returnObject.payload as User).hash;
    }

    return returnObject;
  }
}
