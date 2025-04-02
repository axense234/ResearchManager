// Validators
import { IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
// Types
import { EntityType } from '@researchmanager/shared/types';

export class OrderByObjectBuilderParamsQuery {
  @IsOptional()
  @IsString()
  sortByKeys: string;

  @IsString()
  @IsOptional()
  sortByOrders: string;
}

export class OrderByObjectBuilderParams {
  @IsString()
  entityType: EntityType;

  @Type(() => OrderByObjectBuilderParamsQuery)
  queryParams: OrderByObjectBuilderParamsQuery;
}
