// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsOptional, IsString } from 'class-validator';
// Data
import { getResearchActivitiesQueryParamsApiPropertyOptions } from '../options/parameter';

export class GetResearchActivitiesQueryParamsSwaggerWrapper {
  @ApiProperty(getResearchActivitiesQueryParamsApiPropertyOptions['userId'])
  @IsOptional()
  @IsString()
  userId: string;

  @ApiProperty(
    getResearchActivitiesQueryParamsApiPropertyOptions['searchByKey'],
  )
  @IsOptional()
  @IsString()
  searchByKey: string;

  @ApiProperty(
    getResearchActivitiesQueryParamsApiPropertyOptions['searchByValue'],
  )
  @IsOptional()
  @IsString()
  searchByValue: string;

  @ApiProperty(getResearchActivitiesQueryParamsApiPropertyOptions['sortByKeys'])
  @IsOptional()
  @IsString()
  sortByKeys: string;

  @ApiProperty(
    getResearchActivitiesQueryParamsApiPropertyOptions['sortByOrders'],
  )
  @IsString()
  @IsOptional()
  sortByOrders: 'asc' | 'desc';

  @ApiProperty(
    getResearchActivitiesQueryParamsApiPropertyOptions['includeValues'],
  )
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(
    getResearchActivitiesQueryParamsApiPropertyOptions['selectValues'],
  )
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    getResearchActivitiesQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
