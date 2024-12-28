// Nest
import { Body, Controller, HttpCode, Post, Query } from '@nestjs/common';
// Providers
import { AuthService } from './services/index.service';
// Auth
import AuthDto from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body() dto: AuthDto) {
    return this.authService.SignUpService.signUp(dto);
  }

  @Post('signin')
  @HttpCode(200)
  signIn(@Body() dto: AuthDto) {
    return this.authService.SignInService.signIn(dto);
  }

  @Post('logout')
  @HttpCode(200)
  logOut(@Query('userId') userId: string) {
    return this.authService.LogOutService.logOut(userId);
  }
}
