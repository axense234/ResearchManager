// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { getSettingsQueryParamsApiPropertyOptions } from '../../data';

export class GetSettingsQueryParams {
  @ApiProperty(getSettingsQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(getSettingsQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(getSettingsQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
