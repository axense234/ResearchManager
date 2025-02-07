// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { SignTokenService } from './signToken.service';
import { SignUpService } from './signUp.service';
import { SignInService } from './signIn.service';
import { LogOutService } from './logOut.service';
// Dtos
import AuthDto from '../dto/auth.dto';
// Types
import { LogOutQueryParams, SignUpQueryParams } from '../types';
import { SignInQueryParams } from '../types/params/SignInQueryParams';

@Injectable()
export class AuthService {
  constructor(
    private signTokenService: SignTokenService,
    private signUpService: SignUpService,
    private signInService: SignInService,
    private logOutService: LogOutService,
  ) {}

  async signToken(userId: string, email: string) {
    return await this.signTokenService.signToken(userId, email);
  }

  async signUp(queryParams: SignUpQueryParams, dto: AuthDto) {
    return await this.signUpService.signUp(queryParams, dto);
  }

  async signIn(queryParams: SignInQueryParams, dto: AuthDto) {
    return await this.signInService.signIn(queryParams, dto);
  }

  async logOut(queryParams: LogOutQueryParams) {
    return await this.logOutService.logOut(queryParams);
  }
}
