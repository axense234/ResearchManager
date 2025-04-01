// Prisma
import { IsJWT, IsNumber, IsOptional, IsString } from 'class-validator';
// Types
import { ActionType, Entity } from '@researchmanager/shared/types';
import { EntityType } from '../general/EntityType';

export class ReturnObjectBuilderParams {
  @IsString()
  actionType: ActionType;

  @IsString()
  message: string;

  @IsOptional()
  entity?: Entity | Entity[];

  @IsOptional()
  additionalNotes?: string | string[];

  @IsOptional()
  @IsNumber()
  nbHits?: number;

  @IsString()
  @IsOptional()
  entityType?: EntityType;

  @IsJWT()
  @IsOptional()
  access_token?: string;
}
