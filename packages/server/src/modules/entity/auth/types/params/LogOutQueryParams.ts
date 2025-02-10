// Validators
import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';
// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Data
import { logOutQueryParamsApiPropertyOptions } from '../../data/swagger/options/parameter/query/logOutQueryParamsOptions';

export class LogOutQueryParams {
  @ApiProperty(logOutQueryParamsApiPropertyOptions['userId'])
  @IsUUID()
  userId: string;

  @ApiProperty(logOutQueryParamsApiPropertyOptions['email'])
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
