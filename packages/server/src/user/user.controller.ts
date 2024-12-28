// Nest
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
// Providers
import { UserService } from './services/index.service';
// Param Decorators
import { GetUser } from 'src/auth/decorator';
// Prisma
import { User } from '@prisma/client';
// Guards
import { JwtGuard } from 'src/auth/guard';
// Dto
import UpdateUserDto from './dto/user.dto';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  getProfile(@GetUser() user: User) {
    return this.userService.GetProfileService.getProfile(user);
  }

  @Patch(':userId/update')
  updateUser(@Param('userId') userId: string, @Body() dto: UpdateUserDto) {
    return this.userService.UpdateUserService.updateUser(dto, userId);
  }

  @Delete(':userId/delete')
  deleteUser(@Param('userId') userId: string) {
    return this.userService.DeleteUserService.deleteUser(userId);
  }
}
