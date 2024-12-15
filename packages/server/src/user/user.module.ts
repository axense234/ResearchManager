// Nest
import { Module } from '@nestjs/common';
// Providers
import { UserService } from './user.service';
// Controllers
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
