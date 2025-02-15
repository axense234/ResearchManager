// Validators
import { IsString, IsOptional } from 'class-validator';
// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Data
import { getUserQueryParamsApiPropertyOptions } from '../../data';

export class GetUserQueryParams {
  @ApiProperty(getUserQueryParamsApiPropertyOptions['uniqueIdentifierType'])
  @IsString()
  uniqueIdentifierType: 'email' | 'id';

  @ApiProperty(getUserQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(getUserQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(getUserQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
