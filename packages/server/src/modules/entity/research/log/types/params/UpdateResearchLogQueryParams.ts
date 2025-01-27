// Validators
import { IsString, IsOptional } from 'class-validator';

export class UpdateResearchLogQueryParams {
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
