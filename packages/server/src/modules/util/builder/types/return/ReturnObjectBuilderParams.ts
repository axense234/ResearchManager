// Prisma
import { ResearchActivity } from '@prisma/client';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export type ReturnObjectBuilderParamsActionType =
  | 'GET SINGLE'
  | 'GET MULTIPLE'
  | 'CREATE'
  | 'UPDATE'
  | 'DELETE';

export type ReturnObjectBuilderParamsEntity = ResearchActivity;

export class ReturnObjectBuilderParams {
  @IsString()
  actionType: ReturnObjectBuilderParamsActionType;

  @IsString()
  message: string;

  entity: ReturnObjectBuilderParamsEntity;

  @IsOptional()
  additionalNotes?: string | string[];

  @IsOptional()
  @IsNumber()
  nbHits?: number;
}
