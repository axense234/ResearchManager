// Nest
import { Body, Controller, Post } from '@nestjs/common';
// Providers
import { AuthService } from './auth.service';
// Auth
import AuthDto from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    return this.authService.signUp(dto);
  }

  @Post('signin')
  signIn(@Body() dto: AuthDto) {
    return this.authService.signIn(dto);
  }

  @Post('logout')
  logOut() {
    return this.authService.logOut();
  }
}
