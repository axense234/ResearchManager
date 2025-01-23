// Nest
import { Injectable } from '@nestjs/common';
// Services
import { GetProfileService } from './getProfile.service';
import { UpdateUserService } from './updateUser.service';
import { DeleteUserService } from './deleteUser.service';
import { GetUserService } from './getUser.service';
import { GetUsersService } from './getUsers.service';
// Prisma
import { User } from '@prisma/client';
// Dtos
import UpdateUserDto from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    private getUsersService: GetUsersService,
    private getUserService: GetUserService,
    private getProfileService: GetProfileService,
    private updateUserService: UpdateUserService,
    private deleteUserService: DeleteUserService,
  ) {}

  async getUsers(url: string) {
    return await this.getUsersService.getUsers(url);
  }

  async getUser(userId: string, url: string) {
    return await this.getUserService.getUser(userId, url);
  }

  async getProfile(user: User) {
    return await this.getProfileService.getProfile(user);
  }

  async updateUser(dto: UpdateUserDto, userId: string) {
    return await this.updateUserService.updateUser(dto, userId);
  }

  async deleteUser(userId: string) {
    return await this.deleteUserService.deleteUser(userId);
  }
}
