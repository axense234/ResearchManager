// Validators
import { IsString, IsOptional } from 'class-validator';

export type OptionObjectBuilderParamsEntityType = 'researchActivity';

export class OptionObjectBuilderParams {
  @IsString()
  entityType: OptionObjectBuilderParamsEntityType;

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
