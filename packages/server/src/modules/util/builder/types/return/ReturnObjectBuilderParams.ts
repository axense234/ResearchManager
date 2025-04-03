// Prisma
import { IsJWT, IsNumber, IsOptional, IsString } from 'class-validator';
// Types
import {
  ActionType,
  EntityPayload,
  EntityType,
} from '@researchmanager/shared/types';

export class ReturnObjectBuilderParams {
  @IsString()
  actionType: ActionType;

  @IsString()
  message: string;

  @IsOptional()
  entity?: EntityPayload | EntityPayload[];

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
