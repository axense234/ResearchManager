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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// Data
import {
  logOutApiOperationOptions,
  logOutResponsesOptions,
  signInApiBodyOptions,
  signInApiOperationOptions,
  signInResponsesOptions,
  signUpApiBodyOptions,
  signUpApiOperationOptions,
  signUpResponsesOptions,
} from './data/swagger';
import { SwaggerResponses } from './data/swagger/decorators/swaggerResponses.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation(signUpApiOperationOptions)
  @ApiBody(signUpApiBodyOptions)
  @SwaggerResponses()
  @Post('signup')
  signUp(@Query() queryParams: SignUpQueryParams, @Body() dto: SignUpDto) {
    return this.authService.signUp(queryParams, dto);
  }

  @ApiOperation(signInApiOperationOptions)
  @ApiBody(signInApiBodyOptions)
  @ApiResponse(signInResponsesOptions['200'])
  @ApiResponse(signInResponsesOptions['401'])
  @ApiResponse(signInResponsesOptions['404'])
  @Post('signin')
  @HttpCode(200)
  signIn(@Query() queryParams: SignInQueryParams, @Body() dto: SignInDto) {
    return this.authService.signIn(queryParams, dto);
  }

  @ApiOperation(logOutApiOperationOptions)
  @ApiResponse(logOutResponsesOptions['200'])
  @Post('logout')
  @HttpCode(200)
  logOut(@Query() queryParams: LogOutQueryParams) {
    return this.authService.logOut(queryParams);
  }
}
