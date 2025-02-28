// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { updateActivityDayQueryParamsApiPropertyOptions } from '../../data';

export class UpdateActivityDayQueryParams {
  @ApiProperty(updateActivityDayQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(updateActivityDayQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    updateActivityDayQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
