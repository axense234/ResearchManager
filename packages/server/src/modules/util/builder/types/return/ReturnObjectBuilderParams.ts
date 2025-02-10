// Prisma
import { IsJWT, IsNumber, IsOptional, IsString } from 'class-validator';
// Types
import { Entity } from '../general/Entity';
import { ActionType } from '../general/ActionType';
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
