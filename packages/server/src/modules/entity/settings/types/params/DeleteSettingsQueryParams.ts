// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsOptional, IsString } from 'class-validator';
// Data
import { deleteSettingsQueryParamsApiPropertyOptions } from '../../data';

export class DeleteSettingsQueryParams {
  @ApiProperty(deleteSettingsQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(deleteSettingsQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(deleteSettingsQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
