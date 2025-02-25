// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { updateResearchPhaseQueryParamsApiPropertyOptions } from '../../data';

export class UpdateResearchPhaseQueryParams {
  @ApiProperty(
    updateResearchPhaseQueryParamsApiPropertyOptions['includeValues'],
  )
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(updateResearchPhaseQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    updateResearchPhaseQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
