// NestJS
import { Injectable } from '@nestjs/common';
// Services
import { SignTokenService } from './signToken.service';
import { SignUpService } from './signUp.service';
import { SignInService } from './signIn.service';
import { LogOutService } from './logOut.service';

@Injectable()
export class AuthService {
  constructor(
    public SignTokenService: SignTokenService,
    public SignUpService: SignUpService,
    public SignInService: SignInService,
    public LogOutService: LogOutService,
  ) {}
}
