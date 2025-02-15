// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { updateUserQueryParamsApiPropertyOptions } from '../../data';

export class UpdateUserQueryParams {
  @ApiProperty(updateUserQueryParamsApiPropertyOptions['uniqueIdentifierType'])
  @IsString()
  uniqueIdentifierType: 'email' | 'id';

  @ApiProperty(updateUserQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(updateUserQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(updateUserQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
