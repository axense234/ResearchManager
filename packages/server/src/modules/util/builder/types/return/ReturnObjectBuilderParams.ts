// Prisma
import { IsNumber, IsOptional, IsString } from 'class-validator';
// Types
import { Entity } from '../general/Entity';
import { ActionType } from '../general/ActionType';

export class ReturnObjectBuilderParams {
  @IsString()
  actionType: ActionType;

  @IsString()
  message: string;

  entity: Entity | Entity[];

  @IsOptional()
  additionalNotes?: string | string[];

  @IsOptional()
  @IsNumber()
  nbHits?: number;
}
