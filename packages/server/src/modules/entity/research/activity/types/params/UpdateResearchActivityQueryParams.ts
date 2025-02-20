// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { updateResearchActivityQueryParamsApiPropertyOptions } from '../../data';

export class UpdateResearchActivityQueryParams {
  @ApiProperty(
    updateResearchActivityQueryParamsApiPropertyOptions['includeValues'],
  )
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(
    updateResearchActivityQueryParamsApiPropertyOptions['selectValues'],
  )
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    updateResearchActivityQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
