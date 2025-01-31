// Validators
import { IsOptional, IsString } from 'class-validator';

export class DeleteSettingsQueryParams {
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
