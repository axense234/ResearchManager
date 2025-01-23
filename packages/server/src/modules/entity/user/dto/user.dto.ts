import { IsOptional, IsString } from 'class-validator';

class UpdateUserDto {
  @IsString()
  @IsOptional()
  username: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsString()
  @IsOptional()
  hash: string;

  @IsString()
  @IsOptional()
  profileImageSrc: string;

  @IsString()
  @IsOptional()
  backgroundImageSrc: string;
}

export default UpdateUserDto;
