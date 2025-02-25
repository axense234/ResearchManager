// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { deleteResearchLogQueryParamsApiPropertyOptions } from '../../data';

export class DeleteResearchLogQueryParams {
  @ApiProperty(deleteResearchLogQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(deleteResearchLogQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    deleteResearchLogQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
