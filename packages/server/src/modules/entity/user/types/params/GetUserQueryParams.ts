// Validators
import { IsString, IsOptional } from 'class-validator';

export class GetUserQueryParams {
  @IsString()
  uniqueIdentifierType: 'email' | 'id';

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
