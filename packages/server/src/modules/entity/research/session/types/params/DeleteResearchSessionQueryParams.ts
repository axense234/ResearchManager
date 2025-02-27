// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { deleteResearchSessionQueryParamsApiPropertyOptions } from '../../data';

export class DeleteResearchSessionQueryParams {
  @ApiProperty(
    deleteResearchSessionQueryParamsApiPropertyOptions['includeValues'],
  )
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(
    deleteResearchSessionQueryParamsApiPropertyOptions['selectValues'],
  )
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    deleteResearchSessionQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
