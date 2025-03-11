// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { SignTokenService } from './signToken.service';
import { SignUpService } from './signUp.service';
import { SignInService } from './signIn.service';
import { LogOutService } from './logOut.service';
// Dtos
import { SignInDto, SignUpDto } from '../dto';
// Types
import { SignUpQueryParams } from '../types';
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

  async signUp(queryParams: SignUpQueryParams, dto: SignUpDto) {
    return await this.signUpService.signUp(queryParams, dto);
  }

  async signIn(queryParams: SignInQueryParams, dto: SignInDto) {
    return await this.signInService.signIn(queryParams, dto);
  }

  async logOut() {
    return await this.logOutService.logOut();
  }
}
