// Validators
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class SignInDto {
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
