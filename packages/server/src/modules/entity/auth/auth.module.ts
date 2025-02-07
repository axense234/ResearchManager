// Nest
import { Module } from '@nestjs/common';
// JWT
import { JwtModule } from '@nestjs/jwt';
// Controllers
import { AuthController } from './auth.controller';
// Providers
import { JwtStrategy } from './strategy';
import { AuthService } from './services/auth.service';
import { SignInService } from './services/signIn.service';
import { SignUpService } from './services/signUp.service';
import { LogOutService } from './services/logOut.service';
import { SignTokenService } from './services/signToken.service';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  exports: [AuthService],
  providers: [
    JwtStrategy,
    AuthService,
    SignInService,
    SignUpService,
    LogOutService,
    SignTokenService,
  ],
})
export class AuthModule {}
