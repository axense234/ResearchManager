// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { getResearchPhasesQueryParamsApiPropertyOptions } from '../options/parameter';

export class GetResearchPhasesQueryParamsSwaggerWrapper {
  @ApiProperty(
    getResearchPhasesQueryParamsApiPropertyOptions['researchActivityId'],
  )
  @IsOptional()
  @IsString()
  researchActivityId: string;

  @ApiProperty(getResearchPhasesQueryParamsApiPropertyOptions['searchByKey'])
  @IsOptional()
  @IsString()
  searchByKey: string;

  @ApiProperty(getResearchPhasesQueryParamsApiPropertyOptions['searchByValue'])
  @IsOptional()
  @IsString()
  searchByValue: string;

  @ApiProperty(getResearchPhasesQueryParamsApiPropertyOptions['sortByKeys'])
  @IsOptional()
  @IsString()
  sortByKeys: string;

  @ApiProperty(getResearchPhasesQueryParamsApiPropertyOptions['sortByOrders'])
  @IsString()
  @IsOptional()
  sortByOrders: string;

  @ApiProperty(getResearchPhasesQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(getResearchPhasesQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(
    getResearchPhasesQueryParamsApiPropertyOptions['chosenOptionType'],
  )
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
