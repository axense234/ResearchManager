// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { updateActivityLogQueryParamsApiPropertyOptions } from '../../data';

export class UpdateActivityLogQueryParams {
  @ApiProperty(updateActivityLogQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(updateActivityLogQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    updateActivityLogQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
