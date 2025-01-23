// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { SignTokenService } from './signToken.service';
import { SignUpService } from './signUp.service';
import { SignInService } from './signIn.service';
import { LogOutService } from './logOut.service';
// Dtos
import AuthDto from '../dto/auth.dto';

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

  async signUp(dto: AuthDto) {
    return await this.signUpService.signUp(dto);
  }

  async signIn(dto: AuthDto) {
    return await this.signInService.signIn(dto);
  }

  async logOut(userId: string) {
    return await this.logOutService.logOut(userId);
  }
}
