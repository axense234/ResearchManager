// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsOptional, IsString } from 'class-validator';
// Data
import { getResearchSessionsQueryParamsApiPropertyOptions } from '../options/parameter';

export class GetResearchSessionsQueryParamsSwaggerWrapper {
  @ApiProperty(
    getResearchSessionsQueryParamsApiPropertyOptions['researchPhaseId'],
  )
  @IsOptional()
  @IsString()
  researchPhaseId: string;

  @ApiProperty(getResearchSessionsQueryParamsApiPropertyOptions['searchByKey'])
  @IsOptional()
  @IsString()
  searchByKey: string;

  @ApiProperty(
    getResearchSessionsQueryParamsApiPropertyOptions['searchByValue'],
  )
  @IsOptional()
  @IsString()
  searchByValue: string;

  @ApiProperty(getResearchSessionsQueryParamsApiPropertyOptions['sortByKeys'])
  @IsOptional()
  @IsString()
  sortByKeys: string;

  @ApiProperty(getResearchSessionsQueryParamsApiPropertyOptions['sortByOrders'])
  @IsString()
  @IsOptional()
  sortByOrders: string;

  @ApiProperty(
    getResearchSessionsQueryParamsApiPropertyOptions['includeValues'],
  )
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(getResearchSessionsQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    getResearchSessionsQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
