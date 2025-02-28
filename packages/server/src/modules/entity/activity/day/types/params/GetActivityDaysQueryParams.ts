// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsOptional, IsString } from 'class-validator';
// Data
import { getActivityDaysQueryParamsApiPropertyOptions } from '../../data';

export class GetActivityDaysQueryParams {
  @ApiProperty(getActivityDaysQueryParamsApiPropertyOptions['activityFeedId'])
  @IsOptional()
  @IsString()
  activityFeedId: string;

  @ApiProperty(getActivityDaysQueryParamsApiPropertyOptions['searchByKey'])
  @IsOptional()
  @IsString()
  searchByKey: string;

  @ApiProperty(getActivityDaysQueryParamsApiPropertyOptions['searchByValue'])
  @IsOptional()
  @IsString()
  searchByValue: string;

  @ApiProperty(getActivityDaysQueryParamsApiPropertyOptions['sortByKeys'])
  @IsOptional()
  @IsString()
  sortByKeys: string;

  @ApiProperty(getActivityDaysQueryParamsApiPropertyOptions['sortByOrders'])
  @IsString()
  @IsOptional()
  sortByOrders: string;

  @ApiProperty(getActivityDaysQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(getActivityDaysQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(getActivityDaysQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
