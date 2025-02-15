// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { deleteUserQueryParamsApiPropertyOptions } from '../../data';

export class DeleteUserQueryParams {
  @ApiProperty(deleteUserQueryParamsApiPropertyOptions['uniqueIdentifierType'])
  @IsString()
  uniqueIdentifierType: 'email' | 'id';

  @ApiProperty(deleteUserQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(deleteUserQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(deleteUserQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
