// Nest
import { Body, Controller, HttpCode, Post, Query } from '@nestjs/common';
// Providers
import { AuthService } from './services/auth.service';
// Dtos
import { SignInDto, SignUpDto } from './dto';
// Types
import { LogOutQueryParams, SignUpQueryParams } from './types';
import { SignInQueryParams } from './types/params/SignInQueryParams';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Query() queryParams: SignUpQueryParams, @Body() dto: SignUpDto) {
    return this.authService.signUp(queryParams, dto);
  }

  @Post('signin')
  @HttpCode(200)
  signIn(@Query() queryParams: SignInQueryParams, @Body() dto: SignInDto) {
    return this.authService.signIn(queryParams, dto);
  }

  @Post('logout')
  @HttpCode(200)
  logOut(@Query() queryParams: LogOutQueryParams) {
    return this.authService.logOut(queryParams);
  }
}
