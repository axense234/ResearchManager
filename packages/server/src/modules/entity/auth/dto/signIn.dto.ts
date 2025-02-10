// Validators
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
// Data
import { signInDtoOptions } from '../data/swagger';
// Swagger
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty(signInDtoOptions['password'])
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty(signInDtoOptions['email'])
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
