// NestJS
import { Injectable } from '@nestjs/common';
// Types
import { ReturnObjectBuilderParams } from '../types/return/ReturnObjectBuilderParams';
import { ReturnObjectBuilderReturnObject } from '@researchmanager/shared/types';
// Prisma
import { User } from '@prisma/client';
// Status Codes
import { StatusCodes } from 'http-status-codes';

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

    // Number of hits
    if (actionType === 'GET MULTIPLE' && nbHits) {
      returnObject.nbHits = nbHits;
    }

    // Message
    returnObject.message = message;

    // Notes
    if (
      (actionType === 'GET MULTIPLE' && additionalNotes?.length > 0) ||
      (actionType !== 'GET MULTIPLE' && additionalNotes)
    ) {
      returnObject.notes = additionalNotes;
    }

    // Payload
    returnObject.payload = entity;

    // Access Token
    if (
      (actionType === 'CREATE' || actionType === 'SIGNIN') &&
      entityType === 'user'
    ) {
      returnObject.access_token = access_token;
      delete (returnObject.payload as User).hash;
    }

    // Status Code
    if (actionType === 'CREATE') {
      returnObject.statusCode = StatusCodes.CREATED;
    } else if (actionType === 'FORBIDDEN') {
      returnObject.statusCode = StatusCodes.FORBIDDEN;
    } else {
      returnObject.statusCode = StatusCodes.OK;
    }

    return returnObject;
  }
}
