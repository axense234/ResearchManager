// Nest
import { Module } from '@nestjs/common';
// Controllers
import { UserController } from './user.controller';
// Services
import { UserService } from './services/user.service';
import { GetUsersService } from './services/getUsers.service';
import { GetUserService } from './services/getUser.service';
import { UpdateUserService } from './services/updateUser.service';
import { DeleteUserService } from './services/deleteUser.service';
import { GetProfileService } from './services/getProfile.service';

@Module({
  providers: [
    UserService,
    GetUsersService,
    GetUserService,
    GetProfileService,
    UpdateUserService,
    DeleteUserService,
  ],
  controllers: [UserController],
})
export class UserModule {}
