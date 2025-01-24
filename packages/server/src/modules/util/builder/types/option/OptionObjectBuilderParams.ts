// Validators
import { IsString, IsOptional } from 'class-validator';
// Types
import { EntityType } from '../general/EntityType';

export class OptionObjectBuilderParams {
  @IsString()
  entityType: EntityType;

  @IsString()
  @IsOptional()
  includeValues: string;

  @IsString()
  @IsOptional()
  selectValues: string;

  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
