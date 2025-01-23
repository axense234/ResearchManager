import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  username: string;
}

export default AuthDto;
