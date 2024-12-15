// Nest
import { Module } from '@nestjs/common';
// JWT
import { JwtModule } from '@nestjs/jwt';
// Controllers
import { AuthController } from './auth.controller';
// Providers
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
