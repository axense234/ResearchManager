// Nest
import { Body, Controller, HttpCode, Post, Query } from '@nestjs/common';
// Providers
import { AuthService } from './services/auth.service';
// Dtos
import { SignInDto, SignUpDto } from './dto';
// Types
import { LogOutQueryParams, SignUpQueryParams } from './types';
import { SignInQueryParams } from './types/params/SignInQueryParams';
// Swagger
import { ApiTags } from '@nestjs/swagger';
// Custom Decorators
import { SwaggerResponses } from 'src/decorators/swagger/swaggerResponses.decorator';
import { SwaggerBody } from 'src/decorators/swagger/swaggerBody.decorator';
import { SwaggerHead } from 'src/decorators/swagger/swaggerHead.decorator';

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
  logOut(@Query() queryParams: LogOutQueryParams) {
    return this.authService.logOut(queryParams);
  }
}
