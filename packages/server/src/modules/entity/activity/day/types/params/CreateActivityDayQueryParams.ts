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

  @ApiProperty(createActivityDayQueryParamsApiPropertyOptions['includeDepth'])
  @IsString()
  @IsOptional()
  includeDepth: string;

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

  @ApiProperty(
    createActivityDayQueryParamsApiPropertyOptions['createActivityLog'],
  )
  @IsString()
  @IsOptional()
  createActivityLog: 'false' | 'true';

  @ApiProperty(
    createActivityDayQueryParamsApiPropertyOptions['createActivityLogDto'],
  )
  @IsString()
  @IsOptional()
  createActivityLogDto: string;
}
