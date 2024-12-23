// Nest
import { Body, Controller, HttpCode, Post, Query } from '@nestjs/common';
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
  @HttpCode(200)
  signIn(@Body() dto: AuthDto) {
    return this.authService.signIn(dto);
  }

  @Post('logout')
  @HttpCode(200)
  logOut(@Query('userId') userId: string) {
    return this.authService.logOut(userId);
  }
}
