// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsOptional, IsString } from 'class-validator';
// Data
import { getResearchLogsQueryParamsApiPropertyOptions } from '../options/parameter';

export class GetResearchLogsQueryParamsSwaggerWrapper {
  @ApiProperty(getResearchLogsQueryParamsApiPropertyOptions['researchPhaseId'])
  @IsOptional()
  @IsString()
  researchPhaseId: string;

  @ApiProperty(getResearchLogsQueryParamsApiPropertyOptions['searchByKey'])
  @IsOptional()
  @IsString()
  searchByKey: string;

  @ApiProperty(getResearchLogsQueryParamsApiPropertyOptions['searchByValue'])
  @IsOptional()
  @IsString()
  searchByValue: string;

  @ApiProperty(getResearchLogsQueryParamsApiPropertyOptions['sortByKeys'])
  @IsOptional()
  @IsString()
  sortByKeys: string;

  @ApiProperty(getResearchLogsQueryParamsApiPropertyOptions['sortByOrders'])
  @IsString()
  @IsOptional()
  sortByOrders: string;

  @ApiProperty(getResearchLogsQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(getResearchLogsQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(getResearchLogsQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
