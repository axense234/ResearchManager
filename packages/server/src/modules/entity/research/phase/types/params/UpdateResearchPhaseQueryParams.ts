// Validators
import { IsString, IsOptional } from 'class-validator';

export class UpdateResearchPhaseQueryParams {
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
