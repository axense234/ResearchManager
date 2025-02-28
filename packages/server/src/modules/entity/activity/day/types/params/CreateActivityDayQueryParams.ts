// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { createActivityDayQueryParamsApiPropertyOptions } from '../../data/swagger/options/parameter/query/createActivityDayQueryParamsOptions';

export class CreateActivityDayQueryParams {
  @ApiProperty(createActivityDayQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(createActivityDayQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    createActivityDayQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
