// Validators
import { IsString, IsOptional, IsNumber } from 'class-validator';
// Types
import { EntityType } from '@researchmanager/shared/types';

export class OptionObjectBuilderParams {
  @IsString()
  entityType: EntityType;

  @IsString()
  @IsOptional()
  includeValues: string;

  @IsNumber()
  @IsOptional()
  includeDepth?: number;

  @IsString()
  @IsOptional()
  selectValues: string;

  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
