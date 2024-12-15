import { IsNotEmpty, IsString } from 'class-validator';

class JwtResponse {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsString()
  @IsNotEmpty()
  access_token: string;
}

export default JwtResponse;
