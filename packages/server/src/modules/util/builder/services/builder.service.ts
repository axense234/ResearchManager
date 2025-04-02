// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { ReturnObjectBuilderService } from './returnObjectBuilder.service';
import { OptionObjectBuilderService } from './optionObjectBuilder.service';
import { DataObjectBuilderService } from './dataObjectBuilder.service';
import { QueryObjectBuilderService } from './queryObjectBuilder.service';
import { OrderByObjectBuilderService } from './orderByObjectBuilder.service';
import { ChooseAllowedBuilderValuesService } from './chooseAllowedBuilderValues.service';
// Types
import {
  ChooseAllowedBuilderValuesReturnObject,
  DataObjectBuilderDataObject,
  DataObjectBuilderParams,
  OptionObjectBuilderParams,
  OptionObjectBuilderReturnObject,
  OrderByObjectBuilderParams,
  OrderByObjectBuilderReturnObject,
  QueryObjectBuilderParams,
  QueryObjectBuilderReturnObject,
  ReturnObjectBuilderParams,
} from '../types';
import {
  EntityType,
  ReturnObjectBuilderReturnObject,
} from '@researchmanager/shared/types';

@Injectable()
export class ObjectBuilderService {
  constructor(
    private returnObjectBuilderService: ReturnObjectBuilderService,
    private optionObjectBuilderService: OptionObjectBuilderService,
    private dataObjectBuilderService: DataObjectBuilderService,
    private queryObjectBuilderService: QueryObjectBuilderService,
    private orderByObjectBuilderService: OrderByObjectBuilderService,
    private chooseAllowedBuilderValuesService: ChooseAllowedBuilderValuesService,
  ) {}

  chooseAllowedBuilderValues(
    entityType: EntityType,
  ): ChooseAllowedBuilderValuesReturnObject {
    return this.chooseAllowedBuilderValuesService.chooseAllowedBuilderValues(
      entityType,
    );
  }

  async buildReturnObject({
    actionType,
    entity,
    message,
    additionalNotes,
    nbHits,
    entityType,
    access_token,
  }: ReturnObjectBuilderParams): Promise<ReturnObjectBuilderReturnObject> {
    return await this.returnObjectBuilderService.buildReturnObject({
      actionType,
      message,
      entity,
      additionalNotes,
      nbHits,
      access_token,
      entityType,
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

  async buildDataObject({
    dto,
    entityType,
    actionType,
    options,
  }: DataObjectBuilderParams): Promise<DataObjectBuilderDataObject> {
    return await this.dataObjectBuilderService.buildDataObject({
      dto,
      entityType,
      actionType,
      options,
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
