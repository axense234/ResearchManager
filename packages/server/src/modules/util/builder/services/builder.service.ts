// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { ReturnObjectBuilderService } from './returnObjectBuilder.service';
import { OptionObjectBuilderService } from './optionObjectBuilder.service';
import { DataObjectBuilderService } from './dataObjectBuilder.service';
import { QueryObjectBuilderService } from './queryObjectBuilder.service';
import { OrderByObjectBuilderService } from './orderByObjectBuilder.service';
// Types
import {
  DataObjectBuilderDataObject,
  DataObjectBuilderParams,
  OptionObjectBuilderParams,
  OptionObjectBuilderReturnObject,
  OrderByObjectBuilderParams,
  OrderByObjectBuilderReturnObject,
  QueryObjectBuilderParams,
  QueryObjectBuilderReturnObject,
  ReturnObjectBuilderParams,
  ReturnObjectBuilderReturnObject,
} from '../types';

@Injectable()
export class ObjectBuilderService {
  constructor(
    private returnObjectBuilderService: ReturnObjectBuilderService,
    private optionObjectBuilderService: OptionObjectBuilderService,
    private dataObjectBuilderService: DataObjectBuilderService,
    private queryObjectBuilderService: QueryObjectBuilderService,
    private orderByObjectBuilderService: OrderByObjectBuilderService,
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

  buildDataObject({
    dto,
    entityType,
  }: DataObjectBuilderParams): DataObjectBuilderDataObject {
    return this.dataObjectBuilderService.buildDataObject({
      dto,
      entityType,
    });
  }

  buildQueryObject({
    entityType,
    queryParams,
  }: QueryObjectBuilderParams): QueryObjectBuilderReturnObject {
    return this.queryObjectBuilderService.buildQueryObject({
      entityType,
      queryParams,
    });
  }

  buildOrderByObject({
    entityType,
    queryParams,
  }: OrderByObjectBuilderParams): OrderByObjectBuilderReturnObject {
    return this.orderByObjectBuilderService.buildOrderByObject({
      entityType,
      queryParams,
    });
  }
}
