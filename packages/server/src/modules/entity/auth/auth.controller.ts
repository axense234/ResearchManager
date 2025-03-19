// Nest
import { Body, Controller, HttpCode, Post, Query } from '@nestjs/common';
// Providers
import { AuthService } from './services/auth.service';
// Dtos
import type { SignInDto, SignUpDto } from '@researchmanager/shared/types';
// Types
import { SignUpQueryParams } from './types';
import { SignInQueryParams } from './types/params/SignInQueryParams';
// Swagger
import { ApiDefaultResponse, ApiTags } from '@nestjs/swagger';
// Custom Decorators
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';
import { SwaggerBody } from 'src/decorators/swagger/swaggerBody.decorator';
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';

@ApiDefaultResponse({
  description: 'Default response.',
})
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @SwaggerHead('user', 'CREATE')
  @SwaggerBody('user', 'CREATE')
  @SwaggerResponses('user', 'CREATE')
  @Post('signup')
  signUp(@Query() queryParams: SignUpQueryParams, @Body() dto: SignUpDto) {
    return this.authService.signUp(queryParams, dto);
  }

  @SwaggerHead('user', 'SIGNIN')
  @SwaggerBody('user', 'SIGNIN')
  @SwaggerResponses('user', 'SIGNIN')
  @Post('signin')
  @HttpCode(200)
  signIn(@Query() queryParams: SignInQueryParams, @Body() dto: SignInDto) {
    return this.authService.signIn(queryParams, dto);
  }

  @SwaggerHead('user', 'LOGOUT')
  @SwaggerResponses('user', 'LOGOUT')
  @Post('logout')
  @HttpCode(200)
  logOut() {
    return this.authService.logOut();
  }
}
