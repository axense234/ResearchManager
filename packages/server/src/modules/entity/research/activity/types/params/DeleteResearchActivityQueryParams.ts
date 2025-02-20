// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsOptional, IsString } from 'class-validator';
// Data
import { deleteResearchActivityQueryParamsApiPropertyOptions } from '../../data';

export class DeleteResearchActivityQueryParams {
  @ApiProperty(
    deleteResearchActivityQueryParamsApiPropertyOptions['includeValues'],
  )
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(
    deleteResearchActivityQueryParamsApiPropertyOptions['selectValues'],
  )
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    deleteResearchActivityQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
