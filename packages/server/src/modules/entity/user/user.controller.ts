// Nest
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
// Providers
import { UserService } from './services/users.service';
// Param Decorators
import { GetUser } from 'src/modules/entity/auth/decorator';
// Prisma
import { User } from '@prisma/client';
// Guards
import { JwtGuard } from 'src/modules/entity/auth/guard';
// Dto
import UpdateUserDto from './dto/user.dto';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(@Req() req: Request) {
    return this.userService.getUsers(req.url);
  }

  @Get('profile')
  getProfile(@GetUser() user: User) {
    return this.userService.getProfile(user);
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string, @Req() req: Request) {
    return this.userService.getUser(userId, req.url);
  }

  @Patch(':userId/update')
  updateUser(@Param('userId') userId: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(dto, userId);
  }

  @Delete(':userId/delete')
  deleteUser(@Param('userId') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
