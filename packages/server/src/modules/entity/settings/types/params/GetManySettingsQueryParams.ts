// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsOptional, IsString } from 'class-validator';
// Data
import { getManySettingsQueryParamsApiPropertyOptions } from '../../data';

export class GetManySettingsQueryParams {
  @ApiProperty(getManySettingsQueryParamsApiPropertyOptions['userId'])
  @IsOptional()
  @IsString()
  userId: string;

  @ApiProperty(getManySettingsQueryParamsApiPropertyOptions['searchByKey'])
  @IsOptional()
  @IsString()
  searchByKey: string;

  @ApiProperty(getManySettingsQueryParamsApiPropertyOptions['searchByValue'])
  @IsOptional()
  @IsString()
  searchByValue: string;

  @ApiProperty(getManySettingsQueryParamsApiPropertyOptions['sortByKeys'])
  @IsOptional()
  @IsString()
  sortByKeys: string;

  @ApiProperty(getManySettingsQueryParamsApiPropertyOptions['sortByOrders'])
  @IsString()
  @IsOptional()
  sortByOrders: string;

  @ApiProperty(getManySettingsQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(getManySettingsQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(getManySettingsQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
