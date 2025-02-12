// Validators
import { IsString, IsOptional } from 'class-validator';
// Data
import { signInQueryParamsApiPropertyOptions } from '../../data/swagger';
// Swagger
import { ApiProperty } from '@nestjs/swagger';

export class SignInQueryParams {
  @ApiProperty(signInQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(signInQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(signInQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
