// Nest
import { Injectable } from '@nestjs/common';
// Services
import { GetProfileService } from './getProfile.service';
import { UpdateUserService } from './updateUser.service';
import { DeleteUserService } from './deleteUser.service';
import { GetUserService } from './getUser.service';
import { GetUsersService } from './getUsers.service';
// Dtos
import {
  GetUsersQueryParams,
  UpdateUserDto,
} from '@researchmanager/shared/types';
// Types
import {
  DeleteUserQueryParams,
  GetUserQueryParams,
  UpdateUserQueryParams,
} from '../types';

@Injectable()
export class UserService {
  constructor(
    private getUsersService: GetUsersService,
    private getUserService: GetUserService,
    private getProfileService: GetProfileService,
    private updateUserService: UpdateUserService,
    private deleteUserService: DeleteUserService,
  ) {}

  async getUsers(queryParams: GetUsersQueryParams, url: string) {
    return await this.getUsersService.getUsers(queryParams, url);
  }

  async getUser(
    queryParams: GetUserQueryParams,
    uniqueIdentifier: string,
    url: string,
  ) {
    return await this.getUserService.getUser(
      queryParams,
      uniqueIdentifier,
      url,
    );
  }

  async getProfile(
    userId: string,
    queryParams: GetUserQueryParams,
    url: string,
  ) {
    return await this.getProfileService.getProfile(userId, queryParams, url);
  }

  async updateUser(
    queryParams: UpdateUserQueryParams,
    dto: UpdateUserDto,
    uniqueIdentifier: string,
  ) {
    return await this.updateUserService.updateUser(
      queryParams,
      dto,
      uniqueIdentifier,
    );
  }

  async deleteUser(
    queryParams: DeleteUserQueryParams,
    uniqueIdentifier: string,
  ) {
    return await this.deleteUserService.deleteUser(
      queryParams,
      uniqueIdentifier,
    );
  }
}
