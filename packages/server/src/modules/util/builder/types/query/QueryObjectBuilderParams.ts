// Validators
import { Type } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
// General
import { EntityType } from '../general/EntityType';

export class QueryObjectBuilderParamsQuery {
  @IsString()
  @IsOptional()
  userId?: string;

  @IsString()
  @IsOptional()
  researchActivityId?: string;

  @IsString()
  @IsOptional()
  researchPhaseId?: string;

  @IsString()
  @IsOptional()
  searchByKey?: string;

  @IsString()
  @IsOptional()
  searchByValue?: string;
}

export class QueryObjectBuilderParams {
  @Type(() => QueryObjectBuilderParamsQuery)
  queryParams: QueryObjectBuilderParamsQuery;

  @IsString()
  entityType: EntityType;
}
