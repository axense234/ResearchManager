// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { createTagQueryParamsApiPropertyOptions } from '../../data';

export class CreateTagQueryParams {
  @ApiProperty(createTagQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(createTagQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(createTagQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
