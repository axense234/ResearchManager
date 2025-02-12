// Validators
import { IsString, IsOptional } from 'class-validator';
// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Data
import { signUpQueryParamsApiPropertyOptions } from '../../data/swagger/options/parameter/query/signUpQueryParamsOptions';

export class SignUpQueryParams {
  @ApiProperty(signUpQueryParamsApiPropertyOptions['includeValues'])
  @IsString()
  @IsOptional()
  includeValues: string;

  @ApiProperty(signUpQueryParamsApiPropertyOptions['selectValues'])
  @IsString()
  @IsOptional()
  selectValues: string;

  @ApiProperty(signUpQueryParamsApiPropertyOptions['chosenOptionType'])
  @IsString()
  @IsOptional()
  chosenOptionType: 'include' | 'select';
}
