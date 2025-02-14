// Validators
import { IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
// Types
import { EntityType } from '../general/EntityType';

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
