// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { updateResearchSessionQueryParamsApiPropertyOptions } from '../../data';

export class UpdateResearchSessionQueryParams {
  @ApiProperty(
    updateResearchSessionQueryParamsApiPropertyOptions['includeValues'],
  )
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(
    updateResearchSessionQueryParamsApiPropertyOptions['selectValues'],
  )
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    updateResearchSessionQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
