// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { getActivityFeedsQueryParamsApiPropertyOptions } from '../options/parameter';

export class GetActivityFeedsQueryParamsSwaggerWrapper {
  @ApiProperty(getActivityFeedsQueryParamsApiPropertyOptions['userId'])
  @IsOptional()
  @IsString()
  userId: string;

  @ApiProperty(
    getActivityFeedsQueryParamsApiPropertyOptions['researchActivityId'],
  )
  @IsOptional()
  @IsString()
  researchActivityId: string;

  @ApiProperty(getActivityFeedsQueryParamsApiPropertyOptions['searchByKey'])
  @IsOptional()
  @IsString()
  searchByKey: string;

  @ApiProperty(getActivityFeedsQueryParamsApiPropertyOptions['searchByValue'])
  @IsOptional()
  @IsString()
  searchByValue: string;

  @ApiProperty(getActivityFeedsQueryParamsApiPropertyOptions['sortByKeys'])
  @IsOptional()
  @IsString()
  sortByKeys: string;

  @ApiProperty(getActivityFeedsQueryParamsApiPropertyOptions['sortByOrders'])
  @IsString()
  @IsOptional()
  sortByOrders: string;

  @ApiProperty(getActivityFeedsQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(getActivityFeedsQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    getActivityFeedsQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
