// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { updateSettingsQueryParamsApiPropertyOptions } from '../../data';

export class UpdateSettingsQueryParams {
  @ApiProperty(updateSettingsQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(updateSettingsQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(updateSettingsQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
