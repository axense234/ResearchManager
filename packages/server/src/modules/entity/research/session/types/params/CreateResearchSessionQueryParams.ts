// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { createResearchSessionQueryParamsApiPropertyOptions } from '../../data';

export class CreateResearchSessionQueryParams {
  @ApiProperty(
    createResearchSessionQueryParamsApiPropertyOptions['includeValues'],
  )
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(
    createResearchSessionQueryParamsApiPropertyOptions['selectValues'],
  )
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    createResearchSessionQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
