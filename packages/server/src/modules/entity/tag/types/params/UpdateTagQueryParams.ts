// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { updateTagQueryParamsApiPropertyOptions } from '../../data';

export class UpdateTagQueryParams {
  @ApiProperty(updateTagQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(updateTagQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(updateTagQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
