// Validators
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsUUID } from 'class-validator';
// Types
import { EntityType } from '@researchmanager/shared/types';

export class QueryObjectBuilderParamsQuery {
  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsUUID()
  @IsOptional()
  researchActivityId?: string;

  @IsUUID()
  @IsOptional()
  researchPhaseId?: string;

  @IsUUID()
  @IsOptional()
  activityFeedId?: string;

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
