// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { ReturnObjectBuilderService } from './returnObjectBuilder.service';
import { OptionObjectBuilderService } from './optionObjectBuilder.service';
// Types
import {
  OptionObjectBuilderParams,
  OptionObjectBuilderReturnObject,
  ReturnObjectBuilderParams,
  ReturnObjectBuilderReturnObject,
} from '../types';

@Injectable()
export class ObjectBuilderService {
  constructor(
    private returnObjectBuilderService: ReturnObjectBuilderService,
    private optionObjectBuilderService: OptionObjectBuilderService,
  ) {}

  buildReturnObject({
    actionType,
    entity,
    message,
    additionalNotes,
    nbHits,
  }: ReturnObjectBuilderParams): ReturnObjectBuilderReturnObject {
    return this.returnObjectBuilderService.buildReturnObject({
      actionType,
      message,
      entity,
      additionalNotes,
      nbHits,
    });
  }

  buildOptionObject({
    entityType,
    chosenOptionType,
    includeValues,
    selectValues,
  }: OptionObjectBuilderParams): OptionObjectBuilderReturnObject {
    return this.optionObjectBuilderService.buildOptionObject({
      entityType,
      chosenOptionType,
      includeValues,
      selectValues,
    });
  }
}
