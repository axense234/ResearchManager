// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { deleteResearchPhaseQueryParamsApiPropertyOptions } from '../../data';

export class DeleteResearchPhaseQueryParams {
  @ApiProperty(
    deleteResearchPhaseQueryParamsApiPropertyOptions['includeValues'],
  )
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(deleteResearchPhaseQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    deleteResearchPhaseQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
