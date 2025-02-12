// Validators
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
// Swagger
import { ApiProperty } from '@nestjs/swagger';
// Data
import { signInDtoOptions } from '../data/swagger/options/parameter/dto/signInDtoOptions';

export class SignInDto {
  @ApiProperty(signInDtoOptions['email'])
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty(signInDtoOptions['password'])
  @IsString()
  @IsNotEmpty()
  password: string;
}
