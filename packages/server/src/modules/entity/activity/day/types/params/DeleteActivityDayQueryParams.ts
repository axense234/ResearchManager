// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { deleteActivityDayQueryParamsApiPropertyOptions } from '../../data';

export class DeleteActivityDayQueryParams {
  @ApiProperty(deleteActivityDayQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(deleteActivityDayQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    deleteActivityDayQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
