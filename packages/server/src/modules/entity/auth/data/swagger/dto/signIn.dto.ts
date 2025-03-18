// Validators
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Data
import { signInDtoOptions } from '../options/parameter';

export class SignInDtoSwaggerWrapper {
  @ApiProperty(signInDtoOptions['email'])
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty(signInDtoOptions['password'])
  @IsString()
  @IsNotEmpty()
  password: string;
}
