// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsOptional, IsString } from 'class-validator';
// Data
import { getActivityLogsQueryParamsApiPropertyOptions } from '../options/parameter';

export class GetActivityLogsQueryParamsSwaggerWrapper {
  @ApiProperty(getActivityLogsQueryParamsApiPropertyOptions['searchByKey'])
  @IsOptional()
  @IsString()
  searchByKey: string;

  @ApiProperty(getActivityLogsQueryParamsApiPropertyOptions['searchByValue'])
  @IsOptional()
  @IsString()
  searchByValue: string;

  @ApiProperty(getActivityLogsQueryParamsApiPropertyOptions['sortByKeys'])
  @IsOptional()
  @IsString()
  sortByKeys: string;

  @ApiProperty(getActivityLogsQueryParamsApiPropertyOptions['sortByOrders'])
  @IsString()
  @IsOptional()
  sortByOrders: string;

  @ApiProperty(getActivityLogsQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(getActivityLogsQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(getActivityLogsQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
